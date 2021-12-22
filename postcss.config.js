module.exports = (ctx) => ({
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    csssnano: ctx.env === 'production' ? {} : false
  },
})
