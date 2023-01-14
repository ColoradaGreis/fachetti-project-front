import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      $Private: path.resolve(__dirname, 'src/private'),
      $Public: path.resolve(__dirname, 'src/public'),
      $Hooks: path.resolve(__dirname, 'src/hooks'),
      $Api: path.resolve(__dirname, 'src/api')
    }
  }

})
