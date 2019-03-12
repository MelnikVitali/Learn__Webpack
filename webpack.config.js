import {Module, Plagins} from "./module.and.plagins";

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


let conf = {
    mode: 'production',  //development
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    Module,
    Plagins,
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
};

module.exports = (env, options) => {
    let production = options.mode === 'production';

    conf.devtool = production
        ? 'source-map'
        : 'eval-sourcemap';
    return conf;
};