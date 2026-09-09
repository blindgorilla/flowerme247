# flowerme247

Bilingual (English / Greek) waitlist landing page for FlowerMe, a 24/7 fresh
flower vending machine launching in Cyprus this October.

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Supabase (`@supabase/supabase-js`) for the waitlist table
- Deployed on Vercel

## Local development

```bash
npm install
cp .env.local.example .env.local # fill in Supabase URL + anon key
npm run dev
```

## Supabase setup

Run `supabase/schema.sql` in the Supabase SQL editor for the project
referenced by `NEXT_PUBLIC_SUPABASE_URL`. It creates the `waitlist` table,
an insert-only RLS policy for the anon key, and a `waitlist_count()`
function used for the live waitlist counter (the anon key is never granted
`select` on the table itself, so it can't read back emails/phone numbers).

## Localization

Locale state lives in `src/lib/locale-context.tsx` (a plain React context,
`'en' | 'el'`, defaulting to `'en'`). All copy comes from the dictionary in
`src/lib/i18n.ts`. There's no i18n routing — the toggle just swaps which
half of the dictionary is read.
