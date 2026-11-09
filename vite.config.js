import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // caminhos relativos: funciona no GitHub Pages (utilizador.github.io/repositorio/),
  // Vercel, Netlify ou qualquer outro alojamento
  base: './',
})
