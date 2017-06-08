let webpackConfig = require('../config/webpack.test');

module.exports = function (config) {
    let _config = {
        basePath: '',

        frameworks: ['jasmine'],

        files: [
            './src/modules/**/*.spec.js',
            './src/modules/**/*.spec.jsx'
        ],

        preprocessors: {
            './src/modules/**/*.spec.js': ['webpack'],
            './src/modules/**/*.spec.jsx': ['webpack']
        },
        webpack: webpackConfig,

        webpackMiddleware: {
            stats: 'errors-only'
        },

        webpackServer: {
            noInfo: true
        },

        reporters: ['mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: false,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity
    };

    config.set(_config);
};