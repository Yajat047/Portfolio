/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#112240',
        accent: '#64ffda',
        textPrimary: '#ccd6f6',
        textSecondary: '#8892b0',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #64ffda, 0 0 10px #64ffda' },
          '100%': { boxShadow: '0 0 10px #64ffda, 0 0 20px #64ffda, 0 0 30px #64ffda' },
        },
      },
    },
  },
  plugins: [],
}
