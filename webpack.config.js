const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: {
        'bundle': [
            'babel-polyfill',
            'react-hot-loader/patch',
            './src/index'
        ]
    },
    output: {
        path: __dirname,
        publicPath: "/",
        filename: "[name].js"
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            }
        ]
    },
};