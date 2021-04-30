const postcssPresetEnv = require('postcss-preset-env');

module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: [
    postcssPresetEnv({ stage: 4 })
  ],
})
