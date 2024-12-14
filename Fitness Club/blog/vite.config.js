import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // This makes Vite accessible on your local network
    port: 5173   // Optional: Change the port if needed
  },
})
