# Dependency Diagnostics

The initial dependency install failed because outbound HTTPS requests to `https://registry.npmjs.org` were rejected by the configured HTTP(S) proxy before reaching npm. A direct request without the proxy could not resolve DNS for `registry.npmjs.org`, so bypassing the proxy was not viable.

The safe Phase 1 fix is to avoid external package downloads for the runnable foundation rather than switching to an untrusted mirror, disabling TLS, or weakening package verification. The desktop foundation now runs on Node's built-in HTTP server and browser-native JavaScript/CSS while preserving TypeScript contracts for the product boundaries.
