# PrintAI

PrintAI is a planned premium Windows desktop application for the workflow:

> Image → Understand → Generate → Preview → Prepare → Print

This repository currently contains the approved Phase 1 foundation: a pnpm monorepo with a runnable dependency-free desktop shell and shared TypeScript contracts for AI, printer, slicer, subscription, and `.printai` project-format boundaries. The dependency-free shell is a temporary fallback/bootstrap runtime, not the final desktop architecture.

## Apps

- `apps/desktop` — dependency-free browser desktop UI foundation kept as a fallback/bootstrap environment until the approved Electron + React + TypeScript + Vite architecture can be installed and visually verified.

## Packages

- `packages/shared` — shared subscription and API-facing types.
- `packages/ai` — replaceable AI provider interfaces.
- `packages/printer` — printer adapter interface and capability types.
- `packages/slicer` — slicer adapter interface.
- `packages/project-format` — `.printai` manifest contract.

## Commands

```bash
pnpm install
pnpm dev
pnpm typecheck
pnpm build
pnpm lint
pnpm test
```

## Approved desktop architecture status

The production desktop implementation remains Electron + React + TypeScript + Vite with Framer Motion, Zustand, Three.js / React Three Fiber, and Tailwind or the approved styling system. The fallback runtime must be migrated into that stack before production-level phases begin. See `docs/approved-stack-migration.md`.
