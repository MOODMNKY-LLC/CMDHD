# Vercel Setup for `apps/boundaries`

1. Import GitHub repository `MOODMNKY-LLC/cmdhd-monorepo` in Vercel
2. Framework preset: Next.js
3. Root Directory: `apps/boundaries`
4. Install Command: `pnpm install`
5. Build Command: `pnpm -F @cmdhd/boundaries build`
6. Output Directory: `.next`
7. Environment: Add from repo root `.env`
   - `NEXT_PUBLIC_SITE_NAME=CMDHD`
8. Monorepo settings: Ensure `apps/boundaries` and `packages/*` are included
9. Enable automatic deployments on `main`
10. Run initial deployment and verify light/dark toggle
