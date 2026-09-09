-- Reference schema for the FlowerMe waitlist. Run this in the Supabase SQL
-- editor for the project referenced by NEXT_PUBLIC_SUPABASE_URL.

create table if not exists public.waitlist (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  email text not null,
  phone text,
  interest text not null check (interest in ('bouquet', 'subscription', 'either')),
  utm_source text,
  utm_medium text
);

alter table public.waitlist enable row level security;

-- Allow anonymous inserts from the landing page. There is deliberately no
-- select policy on the table itself, so the anon key can never read back
-- emails/phone numbers — only the count function below is exposed for the
-- "N flower lovers on the waitlist" counter.
create policy "Anyone can join the waitlist"
  on public.waitlist for insert
  to anon
  with check (true);

create or replace function public.waitlist_count()
returns bigint
language sql
security definer
set search_path = public
as $$
  select count(*) from public.waitlist;
$$;

grant execute on function public.waitlist_count() to anon;
