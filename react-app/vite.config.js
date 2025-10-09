import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Use relative paths so the site works whether served at root or subpath
  base: './',
  plugins: [react(), tailwindcss()],
})
