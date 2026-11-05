# JSK Human Resources Consulting

Premium Next.js website for **JSK Human Resources Consulting, LLC**.

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

## Environment variables

Copy `.env.example` to `.env.local`:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL |
| `CONTACT_TO_EMAIL` | Verified recipient for enquiries |
| `RESEND_API_KEY` | Resend delivery key |
| `CONTACT_FROM_EMAIL` | Optional verified sender |
| `CONTACT_ACCEPT_ENQUIRIES` | Must be `true` to accept live form submissions |
| `NEXT_PUBLIC_CALENDLY_URL` | Optional booking URL |

Live enquiries remain closed until `CONTACT_ACCEPT_ENQUIRIES=true` and email credentials are configured.

## Routes

- `/` Home
- `/services` Services
- `/industries` Industry expertise
- `/about` About June
- `/contact` Consultation enquiry
