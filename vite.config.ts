// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  base: "https://github.com/DsSoft-Byte/newsite.git", // <-- GitHub repo name
});
