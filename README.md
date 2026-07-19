# Eleanor Opolo — Portfolio

Personal portfolio for Eleanor Linda Opolo, Frontend Software Engineer (Nairobi, Kenya). Built with **Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion**, implementing the design in [design_handoff_portfolio_v1/README.md](design_handoff_portfolio_v1/README.md).

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
```

## Contact form email

The form posts to `POST /api/contact`, which sends the message by SMTP (Nodemailer). Configure it by copying `.env.example` to `.env.local`:

| Variable | Purpose |
|---|---|
| `SMTP_USER` | SMTP login (your Gmail address) |
| `SMTP_PASS` | Gmail **App Password** (Google Account → Security → 2-Step Verification → App passwords) |
| `SMTP_HOST` / `SMTP_PORT` | Default `smtp.gmail.com` / `465` — change for another provider |
| `CONTACT_TO` | Delivery address (defaults to `SMTP_USER`) |

Without these set, the API responds with a friendly error and the form shows a direct `mailto:` fallback. Remember to add the same variables in your hosting dashboard (e.g. Vercel → Project → Settings → Environment Variables) when deploying.

## Assets still to add

- `public/Eleanor-Opolo-CV.pdf` — the nav "Download CV" button links here
- Three project screenshots (Votex, ElimuApp, BingeBox) — replace the striped placeholders in [components/Work.tsx](components/Work.tsx)
- Real GitHub / Live / Figma project URLs in [components/Work.tsx](components/Work.tsx), and the LinkedIn URL in [components/Contact.tsx](components/Contact.tsx)

The About portrait already uses `public/portrait.jpeg`.

## Structure

- `app/layout.tsx` — fonts (Playfair Display, Geist, Geist Mono via `next/font`) + metadata
- `app/globals.css` — design tokens (colors, easing, marquee/blink keyframes) as Tailwind v4 `@theme`
- `app/page.tsx` — assembles the sections
- `app/api/contact/route.ts` — email-sending endpoint
- `components/` — Nav (scroll-spy), Hero, Marquee, About, Work (5s auto-alternating overlays), Experience, Skills, Contact, Footer, MouseOrb, Reveal
