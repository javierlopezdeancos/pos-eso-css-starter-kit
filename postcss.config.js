const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer =  require('autoprefixer')
const cssnano = require('cssnano')
const atImport = require("postcss-import")
const simpleExtend = require('postcss-extend');
const stylelint = require('stylelint');

module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: [
    postcssPresetEnv({ stage: 4 }),
    atImport({
      from: "src/index.css",
    }),
    simpleExtend(),
    stylelint(),
    autoprefixer(),
    cssnano({ preset: 'default' }),
  ],
})
