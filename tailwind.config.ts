import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ice: {
          '50': '#e0f4fe',
          '100': '#4cc9f0',
          '200': '#2abde6',
          '300': '#1895c0',
          '400': '#0d6e8a',
        },
        aurora: {
          '100': '#c77dff',
          '200': '#7b2ff7',
          '300': '#5a1fd0',
        },
        tundra: {
          '100': '#2dd4bf',
          '200': '#14b8a6',
          '300': '#0d9488',
        },
        ember: {
          '100': '#f48c06',
          '200': '#dc2f02',
        },
        frost: {
          '100': '#e8edf0',
          '200': '#c8d6e0',
          '300': '#a0b4c4',
        },
        night: {
          DEFAULT: '#080e16',
          '50': 'rgba(255,255,255,0.03)',
          '100': 'rgba(255,255,255,0.055)',
          '200': 'rgba(255,255,255,0.08)',
          '300': 'rgba(255,255,255,0.12)',
        },
        glass: {
          DEFAULT: 'rgba(8,14,22,0.78)',
          border: 'rgba(76,201,240,0.09)',
        },
        'text-primary': '#edf2fa',
        'text-secondary': 'rgba(237,242,250,0.6)',
        'text-tertiary': 'rgba(237,242,250,0.38)',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'Noto Sans JP', 'Noto Sans KR', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #4cc9f0 0%, #2dd4bf 50%, #7b2ff7 100%)',
        'gradient-ice': 'linear-gradient(135deg, #4cc9f0, #2abde6)',
        'gradient-frost': 'linear-gradient(180deg, rgba(76,201,240,0.07) 0%, transparent 60%)',
        'gradient-aurora': 'linear-gradient(180deg, rgba(123,47,247,0.07) 0%, transparent 60%)',
        'gradient-tundra': 'linear-gradient(180deg, rgba(45,212,191,0.06) 0%, transparent 60%)',
        'glow-ice': 'radial-gradient(ellipse, rgba(76,201,240,0.14) 0%, transparent 70%)',
        'glow-tundra': 'radial-gradient(ellipse, rgba(45,212,191,0.12) 0%, transparent 70%)',
        'glow-aurora': 'radial-gradient(ellipse, rgba(123,47,247,0.14) 0%, transparent 70%)',
        'glow-ember': 'radial-gradient(ellipse, rgba(244,140,6,0.1) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-ice': '0 0 40px rgba(76,201,240,0.1)',
        'glow-aurora': '0 0 40px rgba(123,47,247,0.1)',
        'glow-ember': '0 0 40px rgba(244,140,6,0.1)',
        'card': '0 4px 30px rgba(0,0,0,0.35)',
        'card-hover': '0 20px 50px rgba(0,0,0,0.45), 0 0 30px rgba(76,201,240,0.06)',
        'btn': '0 8px 35px rgba(76,201,240,0.3)',
      },
      backdropBlur: {
        'xs': '4px',
      },
      animation: {
        'pulse-subtle': 'pulse-subtle 4s cubic-bezier(0.4,0,0.6,1) infinite',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'float': 'float 7s ease-in-out infinite',
        'aurora-shift': 'aurora-shift 8s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'border-glow': 'border-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.9' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-12px) rotate(1deg)' },
          '66%': { transform: 'translateY(-6px) rotate(-0.5deg)' },
        },
        'aurora-shift': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'border-glow': {
          '0%, 100%': { borderColor: 'rgba(76,201,240,0.08)', boxShadow: '0 0 20px rgba(76,201,240,0)' },
          '50%': { borderColor: 'rgba(76,201,240,0.2)', boxShadow: '0 0 30px rgba(76,201,240,0.06)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      borderRadius: {
        'glass': '14px',
      },
    },
  },
  plugins: [],
};

export default config;
