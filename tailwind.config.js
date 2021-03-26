module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'beige': '#f5f2f0',
      'beige-shade': "#ded4cd",
      'white': "#ffffff"
    }
    },
    extend: {
      colors: {
        'beige': "#f5f2f0",
        'beige-shade': "#ded4cd"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
