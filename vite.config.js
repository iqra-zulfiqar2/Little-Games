import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./", // Ensures correct asset paths
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true, // Ensures React Router works in dev mode
  },
});






