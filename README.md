# Macbeth — Marketing Website

The public site for **Macbeth Photos**, a private memory cloud appliance.
Print-journal / editorial aesthetic (Spectral + JetBrains Mono, terracotta on
cream paper), built from the Claude Design `Website v2` mockup.

- **Framework:** Next.js 16 (App Router) + React 19
- **Styling:** Tailwind CSS v4 + a ported design-token stylesheet (`src/app/globals.css`)
- **Waitlist:** `POST /api/waitlist` → Neon Postgres (`@neondatabase/serverless`)
- **Deploy target:** Vercel + Neon

## Local development

```bash
npm install
cp .env.example .env.local   # then paste your Neon DATABASE_URL
npm run dev                  # http://localhost:3000
```

The waitlist API auto-creates its table on first write, so no migration step
is required. The table:

```sql
CREATE TABLE IF NOT EXISTS waitlist (
  id         SERIAL PRIMARY KEY,
  email      TEXT NOT NULL UNIQUE,
  source     TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
```

`source` records where the signup came from (`hero` or `order`).

## Deploying

### 1. Create the database (Neon)

1. Sign in at [neon.tech](https://neon.tech) and create a project.
2. Copy the **pooled** connection string from *Connection Details*.

### 2. Deploy the site (Vercel)

1. Push `macbeth-web/` to its own GitHub repo.
2. In [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Add an environment variable: `DATABASE_URL` = your Neon string
   (Production + Preview).
4. Deploy. Vercel auto-detects Next.js — no extra config needed.

> Tip: from the Vercel dashboard you can also add the Neon integration
> (**Storage → Neon**) and it will inject `DATABASE_URL` for you.

## Project structure

```
src/
├── app/
│   ├── layout.tsx             # fonts (Spectral, JetBrains Mono) + metadata
│   ├── globals.css            # design tokens + all section styles, responsive
│   ├── page.tsx               # the full single-page site (chapters 01–06)
│   └── api/waitlist/route.ts  # POST handler → Neon insert
├── components/
│   └── Waitlist.tsx           # client-side email capture form
└── lib/
    └── db.ts                  # Neon client + table bootstrap
public/
├── device-on-shelf.svg        # Fig. 1 — hero product illustration
└── device-detail.svg          # Fig. 2 — detail product illustration
```

Replace the two SVGs in `public/` with real product photography when it's
ready — they're sized to the `.fig-slot` containers (cover fit), so a JPEG/PNG
drops in cleanly.
