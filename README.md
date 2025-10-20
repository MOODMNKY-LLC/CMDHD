# CMDHD Monorepo (Turborepo)

Monorepo for Central Michigan District Health Department projects. Managed with PNPM and Turborepo.

- Apps live in `apps/`
- Shared packages live in `packages/`
- Uses Next.js 14, React 18, TypeScript (strict), Tailwind, and ShadCN patterns
- Centralized environment via root `.env` loaded into all tasks

## Quickstart

```bash
pnpm i
pnpm dev
```

## Structure

- `apps/boundaries`: Professional Boundaries training app (light/dark mode)
- `packages/ui`: Shared UI components (ShadCN-style)
- `packages/utils`: Common utilities
- `packages/config`: ESLint/Prettier configs
- `packages/env`: Zod-validated env helper

## Deploy

One-click deploy to Vercel:

[Deploy with Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FMOODMNKY-LLC%2Fcmdhd-monorepo&root-directory=apps%2Fboundaries&project-name=cmdhd-boundaries&repository-name=cmdhd-monorepo&install-command=pnpm%20install&build-command=pnpm%20-F%20%40cmdhd%2Fboundaries%20build&output-directory=.next)

See `docs/vercel-setup.md` for manual steps.

## CI
GitHub Actions runs lint, typecheck, and tests on PRs.
