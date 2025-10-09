import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // Use '/' in dev, './' in production builds
  base: mode === 'production' ? './' : '/',
  plugins: [react(), tailwindcss()],
}))
