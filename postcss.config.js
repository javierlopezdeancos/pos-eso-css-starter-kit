const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer =  require('autoprefixer')
const cssnano = require('cssnano')

module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: [
    postcssPresetEnv({ stage: 4 }),
    autoprefixer(),
    cssnano({ preset: 'default' }),
  ],
})
