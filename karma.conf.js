// Karma configuration
// Generated on Sat May 05 2018 08:38:24 GMT+0200 (W. Europe Daylight Time)

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: "",

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ["jasmine", "karma-typescript"],

    // list of files / patterns to load in the browser
    files: ["src/**/!(main|index).ts"],

    karmaTypescriptConfig: {
      compilerOptions: {
        outDir: "./dist/out-tsc",
        sourceMap: true,
        declaration: false,
        moduleResolution: "node",
        emitDecoratorMetadata: true,
        experimentalDecorators: true,
        target: "es6",
        typeRoots: ["node_modules/@types"],
        types: ["jasmine"],
        lib: ["es2017", "dom"]
      },
      include: ["src/**/*.ts"]
    },

    // list of files / patterns to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { "**/*.ts": "karma-typescript" },

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ["progress", "karma-typescript"],

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
    browsers: ["ChromeHeadlessNoSandbox"],

    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    },

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  });
};
