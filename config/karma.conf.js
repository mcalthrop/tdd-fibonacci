/* global module */

module.exports = function (config) {
    config.set({
        basePath: '..',

        frameworks: [
            'requirejs',
            'mocha'
        ],

        files: [
            { pattern: 'src/**/*.js', included: false },
            { pattern: 'test/**/*.spec.js', included: false },
            { pattern: 'node_modules/chai/chai.js', included: false },
            'test/test-main.js'
        ],

        reporters: ['mocha'],

        mochaReporter: {
            output: 'full'
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: false,

        browsers: ['Chrome'],

        singleRun: true,

        plugins: [
            'karma-mocha',
            'karma-mocha-reporter',
            'karma-chrome-launcher',
            'karma-requirejs'
        ]
    });
};
