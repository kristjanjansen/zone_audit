var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    module: {
        loaders: [
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },
    vue: {
        loaders: {
          css: ExtractTextPlugin.extract('css'),
        },
        postcss: function() { return [
            require('postcss-partial-import')(),
            require('postcss-simple-vars')({ variables: require('./src/styles.js')}),
            require('postcss-if-media')(),
            require('postcss-font-magician')(),
        ]},
    },
    plugins: [
        new ExtractTextPlugin("../css/main.css")
    ]
}