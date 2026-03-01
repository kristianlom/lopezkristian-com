import type { APIRoute } from 'astro';

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function jsonResponse(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const POST: APIRoute = async ({ request }) => {
  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return jsonResponse(400, { error: 'Invalid request payload.' });
  }

  const name = payload.name?.trim() ?? '';
  const email = payload.email?.trim() ?? '';
  const message = payload.message?.trim() ?? '';
  const company = payload.company?.trim() ?? '';

  if (company) {
    return jsonResponse(200, { success: true });
  }

  if (!name || name.length < 2 || name.length > 80) {
    return jsonResponse(400, { error: 'Name must be between 2 and 80 characters.' });
  }

  if (!EMAIL_REGEX.test(email) || email.length > 120) {
    return jsonResponse(400, { error: 'Please provide a valid email address.' });
  }

  if (!message || message.length < 20 || message.length > 2000) {
    return jsonResponse(400, { error: 'Message must be between 20 and 2000 characters.' });
  }

  const resendApiKey = import.meta.env.RESEND_API_KEY;
  const contactToEmail = import.meta.env.CONTACT_TO_EMAIL;
  const contactFromEmail = import.meta.env.CONTACT_FROM_EMAIL ?? 'Portfolio Contact <onboarding@resend.dev>';

  if (!resendApiKey || !contactToEmail) {
    return jsonResponse(503, {
      error: 'Contact service is not configured yet. Please reach out through LinkedIn.',
    });
  }

  const subject = `New contact message from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const resendResponse = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: contactFromEmail,
      to: [contactToEmail],
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!resendResponse.ok) {
    return jsonResponse(502, { error: 'Email provider rejected the request. Please try again later.' });
  }

  return jsonResponse(200, { success: true });
};
