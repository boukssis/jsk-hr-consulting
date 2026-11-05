# JSK Human Resources Consulting

Private design concept website for **JSK Human Resources Consulting, LLC**, prepared for June Speranza Kerr’s review.

This is a premium Next.js concept site — not an officially commissioned or endorsed website.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Motion
- Lucide React
- Resend (optional email delivery)
- Zod validation

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

Copy `.env.example` to `.env.local` and configure:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `CONTACT_TO_EMAIL` | Verified recipient for enquiries |
| `RESEND_API_KEY` | Resend delivery key |
| `CONTACT_FROM_EMAIL` | Optional verified sender |
| `NEXT_PUBLIC_CALENDLY_URL` | Optional booking URL |

Without email credentials, the contact form validates and shows a clear **demo** state. It does not pretend an email was sent.

## Pages

- `/` — Home
- `/services` — Services
- `/industries` — Industry expertise
- `/about` — About June
- `/contact` — Consultation enquiry

## Privacy / preview notes

- Search engines are instructed not to index this preview (`robots: noindex`)
- A visible banner identifies the site as a private design concept
- No invented credentials, testimonials, client logos, or business email addresses
