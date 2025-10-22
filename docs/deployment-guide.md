# Deployment Guide - CMDHD Monorepo

## Node.js Version Requirements

This project requires **Node.js >= 22.0.0** as specified in `package.json` engines field.

### Files Created for Deployment

The following files ensure the correct Node.js version is used during deployment:

1. **`.node-version`** - Specifies Node.js 22.0.0 (used by many deployment platforms)
2. **`.nvmrc`** - Node Version Manager file (for local development and some CI/CD)
3. **`nixpacks.toml`** - Nixpacks configuration (for Railway and similar platforms)

## Deployment Configuration

### Nixpacks Configuration (`nixpacks.toml`)

The `nixpacks.toml` file is configured for Turborepo monorepo deployment with:

- **Node.js**: 22.x
- **Package Manager**: pnpm 9.9.0 (via corepack)
- **Build Command**: `pnpm run build` (runs Turborepo build)
- **Start Command**: Navigates to `apps/boundaries-training` and runs `pnpm start`

### Required Environment Variables

When deploying, ensure the following environment variables are set:

#### Supabase (Required)
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
SUPABASE_JWT_SECRET=your_jwt_secret
```

#### General
```bash
NODE_ENV=production
```

## Deployment Platforms

### Railway

Railway uses Nixpacks by default and will automatically detect the `nixpacks.toml` configuration.

**Steps:**
1. Connect your GitHub repository to Railway
2. Set the environment variables in Railway dashboard
3. Deploy!

Railway will:
- Use Node.js 22.x
- Install dependencies with pnpm
- Build using Turborepo
- Start the boundaries-training app

### Vercel

The `apps/boundaries-training/vercel.json` already configures Vercel deployment:

**Steps:**
1. Connect your GitHub repository to Vercel
2. Set Root Directory to `apps/boundaries-training`
3. Override build command: `cd ../.. && pnpm build`
4. Override install command: `pnpm install --frozen-lockfile`
5. Set environment variables
6. Deploy!

### Manual Deployment

For manual deployment or other platforms:

```bash
# Install dependencies
pnpm install --frozen-lockfile

# Build all apps
pnpm run build

# Navigate to app and start
cd apps/boundaries-training
pnpm start
```

## Troubleshooting

### Node Version Mismatch Error

**Error:** `You are using Node.js X.X.X. For Next.js, Node.js version ">=20.9.0" is required.`

**Solution:** Ensure your deployment platform is reading one of:
- `.node-version`
- `.nvmrc`
- `nixpacks.toml`

If using Railway, verify `nixpacks.toml` specifies `nodejs-22_x`.

### pnpm Not Found

**Error:** `pnpm: command not found`

**Solution:** The deployment platform should enable corepack. In `nixpacks.toml`, ensure:
```toml
[phases.install]
cmds = [
  "corepack enable",
  "corepack prepare pnpm@9.9.0 --activate",
  "pnpm install --frozen-lockfile"
]
```

### Build Failures in Monorepo

**Error:** Build fails because it can't find workspace dependencies

**Solution:** Ensure the entire monorepo is available during build. The build command should run from the root:
```bash
pnpm run build  # This runs turbo build from root
```

## CI/CD

GitHub Actions or other CI/CD should use:

```yaml
- uses: actions/setup-node@v4
  with:
    node-version: '22'
    
- uses: pnpm/action-setup@v2
  with:
    version: 9.9.0
    
- run: pnpm install --frozen-lockfile
- run: pnpm run build
```

## Post-Deployment Checklist

- [ ] Application starts successfully
- [ ] Environment variables are set correctly
- [ ] Supabase connection works (auth, database)
- [ ] Static assets load properly
- [ ] No console errors in production build
- [ ] Performance is acceptable (check Lighthouse score)

## Additional Resources

- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Railway Nixpacks](https://nixpacks.com/)
- [Vercel Deployment](https://vercel.com/docs)

