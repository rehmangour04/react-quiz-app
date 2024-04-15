/** @format */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: false, // Disable CSS modules if not needed
    postcss: {}, // Additional PostCSS plugins
  },
});
