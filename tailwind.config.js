/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neu: {
          bg: 'var(--neu-bg)',
          card: 'var(--neu-card)',
          light: 'var(--neu-light)',
          dark: 'var(--neu-dark)',
          text: 'var(--neu-text)',
          muted: 'var(--neu-muted)',
          border: 'var(--neu-border)',
        },
        emerald: {
          500: '#10b981',
          400: '#34d399',
          600: '#059669',
        },
        cyber: {
          blue: '#3b82f6',
          light: '#60a5fa',
          dark: '#1d4ed8',
        },
      },
      boxShadow: {
        'neu-sm': 'var(--neu-shadow-sm)',
        'neu-flat': 'var(--neu-shadow-flat)',
        'neu-raised': 'var(--neu-shadow-raised)',
        'neu-lg': 'var(--neu-shadow-lg)',
        'neu-inset': 'var(--neu-shadow-inset)',
        'neu-inset-sm': 'var(--neu-shadow-inset-sm)',
        'neu-inset-deep': 'var(--neu-shadow-inset-deep)',
        'neu-emerald': '0 0 15px rgba(16, 185, 129, 0.4), var(--neu-shadow-flat)',
        'neu-blue': '0 0 15px rgba(59, 130, 246, 0.4), var(--neu-shadow-flat)',
        'neu-amber': '0 0 15px rgba(245, 158, 11, 0.4), var(--neu-shadow-flat)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scanline': 'scanline 6s linear infinite',
        'radar-sweep': 'radarSweep 4s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        },
        radarSweep: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
};
