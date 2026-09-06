export default defineEventHandler(async (event) => {
  const { name, email, service, message } = await readBody(event);

  if (!name || !email || !message) {
    throw createError({ statusCode: 400, statusMessage: "Missing required fields" });
  }

  const apiKey = event.context.cloudflare?.env?.RESEND_API_KEY;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "WUSLA Contact <contact@wusla.co>",
      to: "wuslateam@gmail.com",
      reply_to: email,
      subject: `New enquiry from ${name}${service ? ` — ${service}` : ""}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service || "Not specified"}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    throw createError({ statusCode: 500, statusMessage: "Failed to send message" });
  }

  return { success: true };
});
