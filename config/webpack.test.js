var webpack = require('webpack');
var helpers = require('./helpers');

module.exports = {
    devtool: 'inline-source-map',

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'react']
                    }
                }
            },
            {
                test: /\.html$/,
                loader: 'null-loader'
            },
            {
                test: /\.less$/,
                loader: 'null-loader'
            },
            {
                test: /\.(jpeg|png|gif|jpg)$/i,
                loader: 'null-loader'
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'null-loader'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }

        ]
    },
    plugins: [

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'React': 'react',
            'ReactDOM': 'react-dom',
        })
    ]
};