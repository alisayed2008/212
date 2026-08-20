# Approved Desktop Stack Migration

The current dependency-free HTML/CSS/JavaScript runtime is a temporary Phase 1 bootstrap fallback. It exists only so the product foundation can launch and be verified while the package registry is blocked in this environment.

It is **not** the final desktop architecture and must not be treated as a permanent replacement for the approved stack.

## Approved production desktop stack

When package registry access is available, migrate the current shell into the approved architecture:

- Electron for the Windows desktop container, native menus, secure IPC, file dialogs, file association, and desktop lifecycle.
- React for renderer UI composition.
- TypeScript with strict typing across Electron main, preload, renderer, and shared contracts.
- Vite for renderer development/build tooling.
- Framer Motion for purposeful premium UI transitions with reduced-motion support.
- Zustand for lightweight predictable client state.
- Three.js / React Three Fiber for the 3D viewer foundation.
- Tailwind CSS or the approved maintainable styling system for design tokens and UI primitives.

## Migration requirements

Before starting production-level feature phases:

1. Keep the current dependency-free runtime available as a fallback/bootstrap environment until the Electron shell is verified.
2. Reintroduce package dependencies only through the official npm registry or another explicitly approved trusted registry.
3. Do not disable TLS, weaken package verification, or bypass security controls to install dependencies.
4. Port the existing splash, auth placeholder, home, desktop menu labels, and create-project shell into React components.
5. Add Electron main/preload boundaries with context isolation and no Node integration in the renderer.
6. Keep unfinished features visibly marked as Coming Soon or mock/manual, never fake production functionality.
7. Run the real desktop app after migration and perform visual verification, including splash → auth → home flow, responsive layout, reduced-motion behavior, and desktop menus.
8. Only after the approved Electron + React runtime is installed, launched, and visually verified should later product phases begin.

## Registry blocker status

The blocker is environmental: npm registry access through the configured proxy returns `403 Forbidden`, and direct access without the proxy cannot resolve `registry.npmjs.org`. See `docs/dependency-diagnostics.md` for the diagnostic record.
