import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/hoobankmain/', // Url of HooBank's Website
  plugins: [react()]
})
