export default defineEventHandler(async (event) => {
  setHeader(event, 'Cache-Control', 'no-store');
  const body: unknown = await readBody(event);
  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    throw createError({ statusCode: 400, statusMessage: 'Please provide a valid project note.' });
  }
  const fields = body as Record<string, unknown>;
  const name = typeof fields.name === 'string' ? fields.name.trim() : '';
  const email = typeof fields.email === 'string' ? fields.email.trim() : '';
  const message = typeof fields.message === 'string' ? fields.message.trim() : '';
  const service = typeof fields.service === 'string' ? fields.service.trim() : '';
  if (name.length < 2 || name.length > 120 || /[\r\n]/.test(name) ||
      email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      message.length < 20 || message.length > 6000 || service.length > 160 || /[\r\n]/.test(service)) {
    throw createError({ statusCode: 400, statusMessage: 'Please check your name, email, and project note.' });
  }

  const apiKey = event.context.cloudflare?.env?.RESEND_API_KEY;
  if (!apiKey) {
    throw createError({ statusCode: 503, statusMessage: 'Enquiries are temporarily unavailable. Please email wuslateam@gmail.com.' });
  }
  let response: Response;
  try {
    response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'WUSLA Contact <contact@wusla.co>',
        to: 'wuslateam@gmail.com',
        reply_to: email,
        subject: `New enquiry from ${name}${service ? ` - ${service}` : ''}`,
        text: `Name: ${name}\nEmail: ${email}\nService: ${service || 'Not specified'}\n\n${message}`,
      }),
      signal: AbortSignal.timeout(15000),
    });
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'Your note could not be sent. Please try again or contact us by email.' });
  }
  if (!response.ok) {
    throw createError({ statusCode: 502, statusMessage: 'Your note could not be sent. Please try again or contact us by email.' });
  }
  return { success: true };
});
