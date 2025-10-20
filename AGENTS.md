This is a context for AI editor/agent about the project. It's generated with a tool Airul (https://github.com/mitkury/airul) out of 2 sources. Edit .airul.json to change sources or enabled outputs. After any change to sources or .airul.json, run `airul gen` to regenerate the context. Keep TODO-AI.md updated after major changes to track tasks and decisions.

# From TODO-AI.md:

# AI Workspace

## Active Task
Learn from the user about their project, get the idea of what they want to make

## Status
⏳ In Progress

## Context & Progress
- Created: 2025-10-02
- I (AI) will maintain this document as we work together
- My current focus: Understanding and working on the active task

## Task History
- Initial task: Learn from the user about their project, get the idea of what they want to make

## Notes
- I'll update this file to track our progress and maintain context
- I'll keep sections concise but informative
- I'll update status and add key decisions/changes
- I'll add new tasks as they come up
---

# From README.md:

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

## CI
GitHub Actions runs lint, typecheck, and tests on PRs.