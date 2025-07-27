module.exports = {
  babel: {
    plugins: ['@emotion/babel-plugin'],
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
};