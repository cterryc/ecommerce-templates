import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite el acceso desde cualquier IP
    // allowedHosts: 'all' // Esto permitiría cualquier host (revisa la documentación de tu versión de Vite)
    // También puedes intentar:
    allowedHosts: ['.ngrok-free.dev'] // Si Vite lo soporta, podrías usar comodines.
  }
})
