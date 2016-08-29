_ = require('lodash')

var colors = {
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
    red: 'rgb(184, 6, 6)',
    blue: 'rgb(43, 45, 66)',
    cool: 'rgb(141, 153, 174)',
    gray: 'rgb(237, 242, 244)'
}

var spacer = 12;

var ratios = { xs: 0.5, sm: 1, md: 2, lg: 3, xl: 4 }

var margins = _
    .chain(ratios)
    .mapKeys((value, key) => 'margin-' + key)
    .mapValues((value) => (spacer * value) + 'px')
    .value()

var paddings = _
    .chain(ratios)
    .mapKeys((value, key) => 'padding-' + key)
    .mapValues((value) => (spacer * value) + 'px')
    .value()

var fontFamilies = {
    text: 'Rubik',
    heading: 'Rubik',
    code: 'Source Code Pro',
    comment: 'Gochi Hand'
}

var textSizes = { sm: 14, md: 16, lg: 20 }
var textFonts = _
    .chain(textSizes)
    .mapKeys((value, key) => 'font-text-' + key)
    .mapValues((value, key) => `normal ${value}px / 100% ${fontFamilies.text}, sans-serif`)
    .value()

var headingSizes = { xs: 14, sm: 16, md: 20, lg: 24, xl: 36}

var headingFonts = _
    .chain(headingSizes)
    .mapKeys((value, key) => 'font-heading-' + key)
    .mapValues((value, key) => `normal ${value}px / 100% "${fontFamilies.heading}", sans-serif`)
    .value()

var codeFonts = {
    'font-code-md': `normal ${textSizes.md}px / 100% "${fontFamilies.code}", monospace`
}

var commentFonts = {
    'font-comment-md': `normal ${textSizes.lg}px / 100% "${fontFamilies.comment}", sans-serif`
}

var lineHeights = _
    .chain({ xs: 1, sm: 1.2, md: 1.4, lg: 1.6 })
    .mapKeys((value, key) => 'line-height-' + key)
    .mapValues((value, key) => (value * 100) + '%')
    .value()

var opacities = _
    .chain({sm: 0.2, md: 0.5, lg: 0.8 })
    .mapKeys((value, key) => 'opacity-' + key)
    .value()

module.exports = Object.assign(
    colors,
    {spacer},
    ratios,
    margins,
    paddings,
    textFonts,
    headingFonts,
    codeFonts,
    commentFonts,
    lineHeights,
    opacities
)