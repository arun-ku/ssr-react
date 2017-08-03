const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            }
        ]
    }
};