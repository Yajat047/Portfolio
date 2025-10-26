/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        
        // 🔵 Original Navy & Teal Theme
        primary: '#0a192f',
        secondary: '#112240',
        accent: '#64ffda',
        textPrimary: '#ccd6f6',
        textSecondary: '#8892b0',



        // 🟣 ACTIVE: Purple & Blue Theme
        // primary: '#0f0e17',
        // secondary: '#1a1926',
        // accent: '#a786ff',
        // textPrimary: '#fffffe',
        // textSecondary: '#a7a9be',



        // 🟠 Orange & Dark Theme
        // primary: '#1a1a2e',
        // secondary: '#16213e',
        // accent: '#ff6700',
        // textPrimary: '#eaeaea',
        // textSecondary: '#94a1b2',

        // 🔴 Red & Black Theme
        // primary: '#0d0d0d',
        // secondary: '#1a1a1a',
        // accent: '#ff0055',
        // textPrimary: '#f0f0f0',
        // textSecondary: '#b0b0b0',

        // 🟢 Green & Dark Theme (Matrix Style)
        // primary: '#0d1117',
        // secondary: '#161b22',
        // accent: '#39ff14',
        // textPrimary: '#c9d1d9',
        // textSecondary: '#8b949e',

        // 💙 Blue & Gold Theme
        // primary: '#0c1226',
        // secondary: '#1a2332',
        // accent: '#ffc107',
        // textPrimary: '#e8eaed',
        // textSecondary: '#9aa5b1',

        // 🌸 Pink & Purple Theme
        // primary: '#1a0b2e',
        // secondary: '#2d1b4e',
        // accent: '#ff6ec7',
        // textPrimary: '#f8f8f8',
        // textSecondary: '#c7b8ea',

        // 🌊 Ocean Blue Theme
        // primary: '#001f3f',
        // secondary: '#003459',
        // accent: '#00d9ff',
        // textPrimary: '#e6f3ff',
        // textSecondary: '#7faac4',

        // 🌙 Midnight Purple Theme
        // primary: '#170a1c',
        // secondary: '#2d1b3d',
        // accent: '#c77dff',
        // textPrimary: '#f0eef1',
        // textSecondary: '#b8a6c8',
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
