const DURATION_MINUTES = 30;
const MIN_LEAD_MS = 30 * 60 * 1000;
const MAX_LEAD_MS = 60 * 24 * 60 * 60 * 1000;

export default defineEventHandler(async (event) => {
  setHeader(event, 'Cache-Control', 'no-store');
  const body: unknown = await readBody(event);
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw createError({ statusCode: 400, statusMessage: 'Please provide valid booking details.' });
  }
  const fields = body as Record<string, unknown>;
  const name = typeof fields.name === 'string' ? fields.name.trim() : '';
  const email = typeof fields.email === 'string' ? fields.email.trim() : '';
  const notes = typeof fields.notes === 'string' ? fields.notes.trim() : '';
  const startIso = typeof fields.startIso === 'string' ? fields.startIso : '';
  const timezone = typeof fields.timezone === 'string' ? fields.timezone.trim().slice(0, 60) : '';

  const start = new Date(startIso);
  const now = Date.now();
  if (
    name.length < 2 || name.length > 120 || /[\r\n]/.test(name) ||
    email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    notes.length > 2000 ||
    Number.isNaN(start.getTime()) ||
    start.getTime() < now + MIN_LEAD_MS ||
    start.getTime() > now + MAX_LEAD_MS
  ) {
    throw createError({ statusCode: 400, statusMessage: 'Please check your name, email, and requested time.' });
  }

  const end = new Date(start.getTime() + DURATION_MINUTES * 60 * 1000);
  const whenLabel = start.toLocaleString('en-IN', {
    dateStyle: 'full',
    timeStyle: 'short',
    timeZone: timezone || 'Asia/Kolkata',
  });

  const ics = buildIcsInvite({
    uid: `${crypto.randomUUID()}@wusla.co`,
    startIso: start.toISOString(),
    endIso: end.toISOString(),
    title: `WUSLA call with ${name}`,
    description: [`Requested by ${name} <${email}>`, notes ? `Notes: ${notes}` : null].filter(Boolean).join('\n'),
    organizerEmail: 'hello@wusla.co',
    organizerName: 'WUSLA',
    attendeeEmail: email,
    attendeeName: name,
  });
  const attachment = { filename: 'meeting.ics', content: btoa(ics) };

  const apiKey = event.context.cloudflare?.env?.RESEND_API_KEY;
  if (!apiKey) {
    throw createError({ statusCode: 503, statusMessage: 'Booking is temporarily unavailable. Please email hello@wusla.co.' });
  }

  const sendEmail = (payload: Record<string, unknown>) =>
    fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    });

  let responses: Response[];
  try {
    responses = await Promise.all([
      sendEmail({
        from: 'WUSLA Bookings <contact@wusla.co>',
        to: 'hello@wusla.co',
        reply_to: email,
        subject: `Meeting requested: ${name} — ${whenLabel}`,
        text: [`${name} <${email}> requested a call.`, `When: ${whenLabel}`, notes ? `Notes: ${notes}` : null].filter(Boolean).join('\n'),
        attachments: [attachment],
      }),
      sendEmail({
        from: 'WUSLA <contact@wusla.co>',
        to: email,
        reply_to: 'hello@wusla.co',
        subject: `Your meeting request with WUSLA — ${whenLabel}`,
        text: `Thanks — we've received your request for ${whenLabel}. We'll confirm by email shortly. The attached invite adds it to your calendar now.`,
        attachments: [attachment],
      }),
    ]);
  } catch (error) {
    console.error('Resend fetch threw', error);
    throw createError({ statusCode: 502, statusMessage: 'Your request could not be sent. Please try again or email hello@wusla.co.' });
  }
  const failed = responses.find((response) => !response.ok);
  if (failed) {
    console.error('Resend responded with error', failed.status, await failed.text());
    throw createError({ statusCode: 502, statusMessage: 'Your request could not be sent. Please try again or email hello@wusla.co.' });
  }

  return { success: true };
});
