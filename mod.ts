/**
 * This module contains a Vite plugin to enable cross-origin isolation.
 * @module
 *
 * @example
 * ```ts
 * import { defineConfig } from "vitest/config";
 * import { crossOriginIsolation } from "@nimbyte/vite-plugin-coi";

 * export default defineConfig({
 *   plugins: [crossOriginIsolation()],
 * });
 * ```
 */

export { crossOriginIsolation } from "./src/vite-plugin-coi";
