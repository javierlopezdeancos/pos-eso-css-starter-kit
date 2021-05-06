const postcssPresetEnv = require('postcss-preset-env');
const autoprefixer =  require('autoprefixer')
const cssnano = require('cssnano')
const atImport = require("postcss-import")
const simpleExtend = require('postcss-extend');
const stylelint = require('stylelint');
const postCssNested = require('postcss-nested');
const postCssCsso = require('postcss-csso');

module.exports = (ctx) => ({
  map: ctx.options.map,
  parser: ctx.options.parser,
  plugins: [
    postcssPresetEnv({ stage: 4 }),
    atImport({
      from: "src/index.css",
    }),
    simpleExtend(),
    postCssNested(),
    stylelint(),
    autoprefixer(),
    cssnano({ preset: 'advanced' }),
    postCssCsso({ restructure: false })
  ],
})
