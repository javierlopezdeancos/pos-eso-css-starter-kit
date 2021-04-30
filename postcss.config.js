const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer =  require('autoprefixer')

module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: [
    postcssPresetEnv({ stage: 4 }),
    autoprefixer(),
  ],
})
