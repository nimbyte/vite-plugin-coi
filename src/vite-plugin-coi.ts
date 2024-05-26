import type { Plugin, ViteDevServer, PreviewServer } from "vite";

/**
 * Adds the appropriate HTTP headers to enable cross-origin isolation
 *
 * @returns {Plugin}
 */
export function crossOriginIsolation(): Plugin {
  return {
    name: "cross-origin-isolation",
    configureServer: addCrossOriginPolicyHeaders,
    configurePreviewServer: addCrossOriginPolicyHeaders,
  };
}

function addCrossOriginPolicyHeaders(
  server: ViteDevServer | PreviewServer
): void {
  server.middlewares.use((_req, res, next) => {
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    res.setHeader("Cross-Origin-Embedder-Policy", "credentialless");
    next();
  });
}
