/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandPrimary: '#6366F1',   // Indigo
        brandSecondary: '#8B5CF6', // Violet
        brandCyan: '#06B6D4',      // Cyan accent
        darkBg: '#0B0F19',         // Deep slate background
        darkSurface: '#111827',    // Gray-900 surface
        darkCard: '#1F2937',       // Gray-800 card
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        glowIndigo: '0 0 15px rgba(99, 102, 241, 0.35)',
        glowCyan: '0 0 15px rgba(6, 182, 212, 0.35)',
      },
      backdropBlur: {
        glass: '12px',
      }
    },
  },
  plugins: [],
}
