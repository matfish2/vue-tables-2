// Karma configuration
// Generated on Sat Nov 28 2015 16:23:16 GMT+0200 (IST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine','browserify'],


    // list of files / patterns to load in the browser
    files: [
    'index.js',
    'lib/**/*.js',
    'tests/acceptance/**/*.js',
    'tests/unit/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
     'index.js': ['browserify'],
     'lib/**/*.js': ['browserify'],
     'tests/acceptance/**/*.js': [ 'browserify' ],
     'tests/unit/**/*.js': [ 'browserify' ]
   },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome','Firefox'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    browserNoActivityTimeout: 100000,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
