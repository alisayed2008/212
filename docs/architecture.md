# PrintAI Architecture

PrintAI is structured as a monorepo so the desktop app, backend, and shared contracts can evolve together without duplicating product-critical schemas.

## MVP boundaries

Phase 1 focuses on a running desktop foundation with splash, authentication placeholder, home, and project creation shell. Future phases add native Electron file dialogs, `.printai` archive persistence, AI generation providers, printer adapters, and slicer adapters.

## Security posture

The desktop client must not contain AI provider secrets, payment secrets, or subscription authority. Premium access is represented as backend-issued entitlements and validated server-side before privileged actions run.

## Adapter strategy

AI, printer, and slicer integrations are represented as replaceable TypeScript interfaces. The first implementation uses mock/manual adapters and clearly labels unfinished capabilities instead of pretending hardware or provider actions succeeded.

## Temporary fallback runtime

The dependency-free runtime is accepted only as an environment-safe Phase 1 bootstrap. It keeps the app launchable while registry access is blocked, but it does not replace the approved Electron + React + TypeScript + Vite architecture. Before production-level phases begin, the current shell must be migrated into Electron/React and visually verified as a real desktop app.
