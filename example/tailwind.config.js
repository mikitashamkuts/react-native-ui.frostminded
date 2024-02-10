/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Since we are using metro resolver for development, we need to add the library's source. You should delete this line
    // if you are installing the library as a dependency to another project
    '../src/**/*.{js,jsx,ts,tsx}',
    // If you are installing the library as a dependency, you'll want to uncomment this line
    //`${libraryPath}/src/**/*.{js,jsx,ts,tsx}`,
  ],

  theme: {
    colors: {
      red: '#ad44',
    },
    extend: {},
  },
  plugins: [],
};
