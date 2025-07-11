import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // needed for the Docker Container port mapping to work
    strictPort: true,
    port: 5179, // change here
    allowedHosts: ["genealpha.ai"],
  },
});
