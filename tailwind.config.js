/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // SparIn Signature Colors (Yellow + Cyan)
        sparin: {
          yellow: '#FFD33D',      // Sport Yellow - PRIMARY
          'yellow-soft': '#FFEB7A', // Soft Gold Yellow
          'yellow-glow': '#FFE066', // Gradient start
          cyan: '#6FEDD6',        // Sporty Cyan - SECONDARY
          'cyan-dark': '#5DD4BD', // Cyan gradient end
          gold: '#F3BA60',        // Crunch Gold - CTA buttons
          'gold-light': '#F5C678', // Gold gradient end
        },
        accent: {
          neon: '#C8FF00',        // Neon Lime - high energy
        },
        neutral: {
          dark: '#202022',        // Lead - text
          charcoal: '#1D1D1D',    // Deep Charcoal
          light: '#F6F6F6',       // Cascading White
          gray: '#736A6A',        // Warm Haze
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 3s infinite',
        'gradient': 'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
    },
  },
  plugins: [],
}
