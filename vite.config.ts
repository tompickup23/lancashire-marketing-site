import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'lancashire-marketing-site'

export default defineConfig(({ command }) => ({
  base: command === 'build' ? `/${repoName}/` : '/',
  plugins: [react()],
}))
