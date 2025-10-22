# Coolify Deployment Guide for CMDHD Monorepo

## Monorepo Configuration (Like Vercel)

This monorepo supports **two deployment approaches**:

### ✅ Approach 1: Point to App Directory (Recommended - Like Vercel)

**In Coolify:**
1. Enable **Monorepo** option
2. Point to: `apps/boundaries-training`
3. The app-level `nixpacks.toml` handles building from workspace root

**How it works:**
- Coolify detects `apps/boundaries-training/nixpacks.toml`
- Nixpacks navigates to workspace root (`../..`)
- Runs `pnpm install` from root (gets overrides)
- Builds using Turborepo filter
- This matches Vercel's monorepo behavior

### Approach 2: Build from Repository Root

Alternatively, you can build from the root:
1. Set **Base Directory** to: `.` (root) or leave empty
2. Uses root `nixpacks.toml`

## Current Issue & Fix

The deployment was failing because Coolify auto-detected the app as a standalone Node.js project:

**Problem:**
- ❌ Auto-detected as `nodejs_18` + `npm`
- ❌ No access to root `pnpm-lock.yaml` and overrides
- ❌ Wrong Tailwind CSS version installed

**Solution:**
- ✅ Added `apps/boundaries-training/nixpacks.toml`
- ✅ Forces Node.js 22 + pnpm 9.9.0
- ✅ Navigates to root for install and build
- ✅ Works like Vercel monorepo deployment

### Step 2: Verify Root Build Directory

The correct Coolify configuration should be:

```yaml
Project Settings:
  Base Directory: (empty) or "."
  Build Command: (auto-detect or use nixpacks)
  Start Command: (auto-detect or "cd apps/boundaries-training && pnpm start")
```

### Step 3: Nixpacks Configuration

The root `nixpacks.toml` file is already configured correctly:

```toml
[phases.setup]
nixPkgs = ["nodejs-22_x"]

[phases.install]
cmds = [
  "corepack enable",
  "corepack prepare pnpm@9.9.0 --activate",
  "pnpm install --frozen-lockfile"
]

[phases.build]
cmds = [
  "pnpm run build"
]

[start]
cmd = "cd apps/boundaries-training && pnpm start"

[variables]
NODE_ENV = "production"
```

### Step 4: Environment Variables

Ensure these are set in Coolify:

```
NEXT_PUBLIC_BASE_URL=https://pro-boundaries.moodmnky.com
NEXT_PUBLIC_SUPABASE_URL=https://xglsqtyulbvblxbdbcyc.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-anon-key>
SUPABASE_SERVICE_ROLE_KEY=<your-service-role-key>
SUPABASE_JWT_SECRET=<your-jwt-secret>
```

## How the Build Works

### Correct Flow (from root):

1. ✅ Coolify clones entire repo
2. ✅ Detects root `nixpacks.toml`
3. ✅ Uses Node.js 22 and pnpm 9.9.0
4. ✅ Runs `pnpm install` with workspaces
5. ✅ Applies root `package.json` overrides (Tailwind CSS v3.4.17)
6. ✅ Runs `pnpm run build` (builds all apps via Turborepo)
7. ✅ Starts with `cd apps/boundaries-training && pnpm start`

### Incorrect Flow (from subdirectory):

1. ❌ Coolify clones repo but builds from `apps/boundaries-training`
2. ❌ Detects Node.js project without pnpm workspace
3. ❌ Uses npm instead of pnpm
4. ❌ Installs dependencies without root overrides
5. ❌ Pulls in wrong Tailwind CSS version
6. ❌ Build fails with `Cannot find module '@tailwindcss/postcss'`

## Alternative: Multi-Stage Docker Build

If you prefer Docker over Nixpacks, create `.docker/Dockerfile`:

```dockerfile
FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.9.0 --activate

FROM base AS deps
WORKDIR /app
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/*/package.json ./packages/
COPY apps/boundaries-training/package.json ./apps/boundaries-training/
RUN pnpm install --frozen-lockfile

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/apps/boundaries-training/.next ./apps/boundaries-training/.next
COPY --from=builder /app/apps/boundaries-training/public ./apps/boundaries-training/public
COPY --from=builder /app/apps/boundaries-training/package.json ./apps/boundaries-training/
COPY --from=builder /app/node_modules ./node_modules
EXPOSE 3000
CMD ["sh", "-c", "cd apps/boundaries-training && pnpm start"]
```

Then in Coolify, set **Build Pack** to Docker and point to this Dockerfile.

## Troubleshooting

### Error: "Cannot find module '@tailwindcss/postcss'"

**Cause**: Building from subdirectory without monorepo context  
**Fix**: Configure Coolify to build from root (see Step 1)

### Error: "ENOENT: no such file or directory, open 'pnpm-lock.yaml'"

**Cause**: pnpm can't find lockfile (building from wrong directory)  
**Fix**: Ensure Base Directory is set to root

### Error: "npm ERR! Could not resolve dependency"

**Cause**: Using npm instead of pnpm  
**Fix**: Verify nixpacks.toml is using pnpm (see Step 3)

## Verification

After configuring, check the Coolify deployment logs for:

```
✓ Using Node.js 22
✓ Activating pnpm@9.9.0
✓ Installing dependencies with pnpm
✓ Building with Turborepo
✓ No errors about missing modules
```

## Summary

**Key Point**: This is a **pnpm monorepo**. Coolify MUST build from the root directory to:

- Use pnpm workspaces
- Apply version overrides
- Run Turborepo
- Access all dependencies

Do NOT configure Coolify to build from `apps/boundaries-training` subdirectory.

