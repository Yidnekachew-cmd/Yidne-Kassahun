# Portfolio – Yidnekachew Kassahun

Personal portfolio of a Software QA Engineer and QA Team Lead, with a built-in admin panel for editing content.

**Live:** https://yidne-portfolio.onrender.com/

## Tech stack

- React 18 + Vite
- Tailwind CSS
- Supabase (database, login and file storage for the admin)

## Features

- Single-page site: hero, about, skills, experience timeline, QA projects, earlier frontend work, certifications, contact
- `/admin` panel to edit every section (add, reorder and delete items, upload photos and CV)
- Runs without Supabase: the site falls back to the built-in content in `src/content/defaultContent.js`

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173 for the site and http://localhost:5173/admin for the admin panel.

## Admin setup (Supabase, free plan)

1. Create a free project at [supabase.com](https://supabase.com).
2. **SQL Editor → New query**: paste [`supabase/setup.sql`](supabase/setup.sql), replace every `you@example.com` with your email, and run it.
3. **Authentication → Users → Add user → Create new user**: enter the same email and a strong password, and tick **Auto Confirm User**.
4. **Authentication → Sign In / Providers**: turn off **Allow new users to sign up**, so nobody else can create an account.
5. **Project Settings → API**: copy the Project URL and the `anon` public key.
6. Copy `.env.example` to `.env.local` and paste both values. Restart `npm run dev`.
7. Open `/admin`, sign in, click **Save changes** once to store the starting content, and you're live.

> Use only the `anon` key in this app. Never put the `service_role` key in the code or in `.env` files.

## Deploy on Render

- Build command: `npm install && npm run build`; publish directory: `dist`
- **Environment**: add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- **Redirects/Rewrites**: add a rewrite from `/*` to `/index.html` so `/admin` works on page refresh

On the free plan, Supabase pauses a project after a week with no activity. If it's paused, the site automatically shows the built-in content; restore the project from the Supabase dashboard.

## Author

**Yidnekachew Kassahun**: [LinkedIn](https://www.linkedin.com/in/yidnekachew-kassahun/) · [GitHub](https://github.com/Yidnekachew-cmd)

## License

[MIT](./LICENSE)
