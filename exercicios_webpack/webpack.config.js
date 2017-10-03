const webpack = require('webpack')
const ExtracTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8090,
        contentBase: './public'
    },
    plugins:[
        new ExtracTextPlugin('app.css')
    ],
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },{
            test: /\.css?$/,
            loader: ExtracTextPlugin.extract("style-loader", "css-loader"),
        }]
    }
}