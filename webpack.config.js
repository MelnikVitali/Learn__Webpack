const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const merge = require('webpack-merge');
const babel = require('./webpack/babel');
const scss = require('./webpack/scss');
const fonts = require('./webpack/fonts');
const images = require('./webpack/images');
const htmlPlagin = require('./webpack/html-plagin');
const miniCssPlagin = require('./webpack/miniCss-plagin');
const cleanPlagin = require('./webpack/clean-plagin');
const jqueryPlagin = require('./webpack/providePlugin-jquery');
const optimiseCssPlagin = require('./webpack/optimizeCss-plagin');

let config = merge([
    {
    entry: './src/js/index.js',
    output: {
        filename: 'main.js',//'[name].js' 
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    devServer: {
        port: 9000,
        compress: true,
        stats: 'errors-only',
        overlay: true,
    },
},
    babel(),
    scss(),
    fonts(),
    images(),
    htmlPlagin(),
    miniCssPlagin(),
    cleanPlagin(),
    jqueryPlagin(),
    optimiseCssPlagin()
]);

module.exports = (env, options) => {
    let production = options.mode === 'production';

    config.devtool = production
        ? false//'source-map'
        : 'eval-sourcemap';
    return config;
};