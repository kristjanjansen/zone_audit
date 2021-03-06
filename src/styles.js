_ = require('lodash')

// Colors

var colors = {
    white: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
    red: 'rgb(184, 6, 6)',
    blue: 'rgb(43, 45, 66)',
    'blue-light': 'rgba(43, 45, 66, 0.75)',
    'blue-lighter': 'rgba(43, 45, 66, 0.5)',
    'blue-lightest': 'rgba(43, 45, 66, 0.25)',
    cool: 'rgb(141, 153, 174)',
    gray: 'rgb(237, 242, 244)',
    'gray-light': 'rgba(141, 153, 174, 0.6)',
    green: 'rgb(11, 168, 105)',
    'green-light': 'rgba(10, 135, 84, 0.1)',
    yellow: 'rgb(255, 232, 117)',
    'yellow-dark': 'rgb(175, 160, 80)'
}

// Spacing

var spacer = 12;

var ratios = { xxs: 0.25, xs: 0.5, sm: 1, md: 2, lg: 3, xl: 4 }

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

// Fonts

var fontFamilies = {
    text: 'Rubik',
    heading: 'Rubik',
    code: 'Source Code Pro',
    comment: 'Gochi Hand'
}

var textSizes = { xs: 13, sm: 14, md: 16, lg: 20 }
var fonts = _
    .chain(textSizes)
    .mapKeys((value, key) => 'font-text-' + key)
    .mapValues((value, key) => `normal ${value}px / 100% ${fontFamilies.text}, sans-serif`)
    .value()

var headingSizes = { xs: 14, sm: 16, md: 20, lg: 24, xl: 36}

_.assign(fonts, _
    .chain(headingSizes)
    .mapKeys((value, key) => 'font-heading-' + key)
    .mapValues((value, key) => `normal ${value}px / 100% "${fontFamilies.heading}", sans-serif`)
    .value()
)

fonts['font-code-md'] = `normal ${textSizes.md}px / 100% "${fontFamilies.code}", monospace`
fonts['font-comment-sm'] = `normal ${textSizes.sm}px / 100% "${fontFamilies.comment}", sans-serif`
fonts['font-comment-md'] = `normal ${textSizes.lg}px / 100% "${fontFamilies.comment}", sans-serif`
fonts['font-logo-title'] = `bold ${headingSizes.lg}px / 100% "${fontFamilies.heading}", sans-serif`
fonts['font-logo-subtitle'] = `normal ${headingSizes.lg}px / 100% "${fontFamilies.heading}", sans-serif`

// Line heights

var lineHeights = _
    .chain({ xs: 1, sm: 1.15, md: 1.3, lg: 1.6 })
    .mapKeys((value, key) => 'line-height-' + key)
    .mapValues((value, key) => (value * 100) + '%')
    .value()

// Opacitites

var opacities = _
    .chain({sm: 0.2, md: 0.5, lg: 0.8 })
    .mapKeys((value, key) => 'opacity-' + key)
    .value()

var mediaWidths = {
    'mobile-width': '34rem',
    'tablet-width': '48rem',
    'desktop-width': '62rem',
    'largedesktop-width': '74rem'
}

var mediaQueries = {
    mobile: `media (max-width: ${mediaWidths['mobile-width']})`,
    tablet: `media (max-width: ${mediaWidths['tablet-width']})`,
    desktop: `media (max-width: ${mediaWidths['desktop-width']})`,
    largedesktop: `media (max-width: ${mediaWidths['largedesktop-width']})`
}
// Export

module.exports = _.assign(
    colors,
    {spacer},
    ratios,
    margins,
    paddings,
    fonts,
    lineHeights,
    opacities,
    mediaWidths,
    mediaQueries
)