import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
})


//yarn add --dev @types/react@^18.2.15 @types/react-dom@^18.2.7 @vitejs/plugin-react@^4.0.3 autoprefixer@^10.4.16 eslint@^8.45.0 eslint-plugin-react@^7.32.2 eslint-plugin-react-hooks@^4.6.0 eslint-plugin-react-refresh@^0.4.3 postcss@^8.4.31 tailwindcss@^3.3.3 vite@^4.4.5
//yarn add @emailjs/browser@^3.11.0 @react-spring/three@^9.7.3 @react-three/drei@^9.88.2 @react-three/fiber@^8.14.5 react@^18.2.0 react-dom@^18.2.0 react-router-dom@^6.17.0 react-vertical-timeline-component@^3.6.0 three@^0.157.0
//yarn add --dev @vitejs/plugin-react
