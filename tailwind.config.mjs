/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0066CC',
          hover: '#0052A3',
          light: '#E8F2FF',
        },
        text: {
          DEFAULT: '#1A1A2E',
          secondary: '#4A4A68',
          muted: '#8888A0',
        },
        surface: '#F8F8FC',
        border: '#E2E2EA',
        success: '#10B981',
        warning: '#F59E0B',
      },
      fontFamily: {
        outfit: ['Outfit', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        card: '12px',
        button: '8px',
      },
    },
  },
  plugins: [],
};
