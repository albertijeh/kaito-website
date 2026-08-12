import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        kaito: {
          'bg-dark': '#08080B',
          'bg-darker': '#0E0E13',
          'bg-darkest': '#14141B',
          'fg-light': '#F7F7FA',
          'purple': '#6C3BFF',
          'purple-light': '#7C5CFF',
          'purple-lighter': '#A997FF',
          'accent': '#916CFF',
          'text-secondary': '#A8A8B3',
          'border': 'rgba(255,255,255,0.08)',
        },
      },
      backgroundColor: {
        dark: '#08080B',
        darker: '#0E0E13',
        darkest: '#14141B',
      },
      textColor: {
        light: '#F7F7FA',
        secondary: '#A8A8B3',
      },
      borderColor: {
        subtle: 'rgba(255,255,255,0.08)',
      },
      fontSize: {
        'hero-desktop': ['72px', { lineHeight: '1.1' }],
        'hero-desktop-xl': ['104px', { lineHeight: '1.05' }],
        'hero-mobile': ['42px', { lineHeight: '1.1' }],
        'hero-mobile-lg': ['56px', { lineHeight: '1.08' }],
      },
      letterSpacing: {
        'tighter': '-0.02em',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
