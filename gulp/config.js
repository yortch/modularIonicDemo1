var appSrc = './www/js',
    src = appSrc,
    dest = '/www/dist',
    path = require('path');

module.exports = function(baseConfig) {

    baseConfig.lint = {
        src: [ adapterSrc.concat('/**/*.js'),
            appSrc.concat('/**/*.js'),
            '!' + appSrc + '/lib/**/*'],
        dest: dest,
        //devel exposes globals usually used for poor mans debugging, browserify:true ignores "use strict" warnings for browserify wrapped dependencies
        options: {"devel": true, "browserify": true}
    };

    baseConfig.browserify = {
        src: appSrc + '/app.js',
        dest: dest,
        outputName: "bundle.js",
        sourcemaps: true,
        options: {insertGlobals: true, debug: true},
        noParse: ['jquery-browserify', 'jquery-ui-browserify/dist/jquery-ui', 'angular/angular',
            'angular-ui/bootstrap/ui-bootstrap', 'angular-ui/bootstrap/ui-bootstrap-tpls', 'angular-ui/ui-router',
            'angular-touch/angular-touch',
            'angular-animate/angular-animate'],
        uglifyOptions: { mangle: false, compress: false, output: { beautify: true, ascii_only: true }}
    };

    return baseConfig;
}