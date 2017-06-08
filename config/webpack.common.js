let webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    helpers = require('./helpers');


let query = {
    bypassOnDebug: true,
    optipng: {

    },
    gifsicle: {
        interlaced: true
    }
};


module.exports = {
    entry: {
        'polyfills': './src/polyfills.js',
        'vendor': './src/vendor.js',
        'app': './src/main.jsx'
    },

    resolve: {
        extensions: ['.js'],
        alias: {
            jquery: 'jquery/src/jquery'
        }
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
                loader: 'html-loader'
            },
            {
                test: /\.css$/,
                include: helpers.root('src'),
                loader: 'raw-loader'
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract({

                    use: [
                        {
                            loader: "css-loader",  options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'resolve-url-loader'
                        },
                        {
                            loader: "less-loader", options: {
                                sourceMap: true
                            }
                        },
                    ],
                    // use style-loader in development
                    fallback: "style-loader"

                })
            },
            {
                test: /\.(jpeg|png|gif|jpg)$/i,
                use: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    `image-webpack-loader?${JSON.stringify(query)}`
                ]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=public/fonts/[name].[ext]'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: require.resolve('jquery'),
                loader: 'expose-loader?jQuery!expose-loader?$'
            }

        ]
    },

    plugins: [

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            'React': 'react',
            'ReactDOM': 'react-dom',
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
