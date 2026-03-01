import type { APIRoute } from 'astro';

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
  company?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Server-side in-memory rate limiter: max 5 submissions per IP per hour.
const SERVER_RATE_LIMIT = 5;
const SERVER_RATE_WINDOW_MS = 60 * 60 * 1000;
const ipAttempts = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const windowStart = now - SERVER_RATE_WINDOW_MS;
  const attempts = (ipAttempts.get(ip) ?? []).filter((t) => t > windowStart);
  if (attempts.length >= SERVER_RATE_LIMIT) return true;
  attempts.push(now);
  ipAttempts.set(ip, attempts);
  return false;
}

function cleanupRateLimitMap() {
  const windowStart = Date.now() - SERVER_RATE_WINDOW_MS;
  for (const [ip, attempts] of ipAttempts) {
    const valid = attempts.filter((t) => t > windowStart);
    if (valid.length === 0) {
      ipAttempts.delete(ip);
    } else {
      ipAttempts.set(ip, valid);
    }
  }
}

function jsonResponse(status: number, body: Record<string, unknown>) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export const POST: APIRoute = async ({ request }) => {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip');

  if (!ip) {
    return jsonResponse(400, { error: 'Unable to verify request origin.' });
  }

  cleanupRateLimitMap();

  if (isRateLimited(ip)) {
    return jsonResponse(429, { error: 'Too many requests. Please wait before trying again.' });
  }

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
