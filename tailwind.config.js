module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#F97316',
        'primary-dark': '#EA580C',
        secondary: '#FFFFFF',
        'secondary-dark': '#F3F4F6',
        accent: '#F59E0B',
        background: '#FFFFFF',
        text: '#333333',
        'dark-background': '#1F2937',
        'dark-text': '#F9FAFB',
      },
      animation: {
        gradient: 'gradient 3s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
