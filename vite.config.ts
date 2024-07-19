import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.ts',
      registerType: 'prompt',
      injectRegister: false,



      injectManifest: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      },


      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: 'StockPulse',
        short_name: 'StockPulse',
        theme_color: '#004D40',
        background_color: '#f4f0ff',
        display: 'standalone',
        orientation: 'portrait',
        scope: '/',
        start_url: '/',
      },

      devOptions: {
        enabled: true,
        navigateFallback: 'index.html',
        suppressWarnings: true,
        type: 'module',
      },
    }),
    mkcert()
  ],
})
