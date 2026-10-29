-- Portfolio admin setup. Run once in Supabase: SQL Editor -> New query -> paste -> Run.
-- BEFORE RUNNING: replace every you@example.com (4 places) with the email you will log in with.

-- 1. Content table: the whole site is one JSON document in one row.
create table if not exists public.site_content (
  id text primary key,
  data jsonb not null,
  updated_at timestamptz not null default now()
);

alter table public.site_content enable row level security;

-- Anyone can read (the public site needs it).
drop policy if exists "Public can read content" on public.site_content;
create policy "Public can read content"
  on public.site_content for select
  using (true);

-- Only the admin can write.
drop policy if exists "Admin can write content" on public.site_content;
create policy "Admin can write content"
  on public.site_content for all
  to authenticated
  using ((auth.jwt() ->> 'email') = 'you@example.com')
  with check ((auth.jwt() ->> 'email') = 'you@example.com');

-- 2. Media bucket for photos, screenshots and your CV PDF.
insert into storage.buckets (id, name, public)
values ('portfolio-media', 'portfolio-media', true)
on conflict (id) do nothing;

drop policy if exists "Admin can upload media" on storage.objects;
create policy "Admin can upload media"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'portfolio-media' and (auth.jwt() ->> 'email') = 'you@example.com');

drop policy if exists "Admin can manage media" on storage.objects;
create policy "Admin can manage media"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'portfolio-media' and (auth.jwt() ->> 'email') = 'you@example.com');
