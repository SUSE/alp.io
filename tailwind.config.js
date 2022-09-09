module.exports = {
  mode: 'jit',
  purge: ['./public/**/*.html', './pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: '#ffff33',
        'primary-light': '#113636',

        'secondary-dark': '#0C0D0D',
        'secondary-light': '#30BA78',
        'secondary-lighter': '#AFEACD',
        'suse-blue': '#2251F5',
        'suse-gray': '#f7f7f7',
        customDark: `#1d1f1f`,
      },
    },
    fontFamily: {
      body: ['"Poppins"', 'Arial', 'Helvetica'],
      display: ['"Poppins"', 'Arial', 'Helvetica'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  options: {
    // not working?
    safelist: ['bg-purple-500', 'bg-yellow-500', `bg-gray-500`],
  },
}
