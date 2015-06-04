var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

//Additional dependencies added for browserify and lint
var jshint = require('gulp-jshint');
var browserify = require('browserify');
var vinylSource = require('vinyl-source-stream');

var paths = {
  sass: ['./scss/**/*.scss'],
  jsSrc: ['./www/js/*.js'],
  src: ['./wwww/**/*', '!wwww/lib/**/*', '!www/dist/**/*'],
  appSrc: ['./www/js/app.js']
};

gulp.task('default', ['lint', 'browserify']);

gulp.task('sass', function(done) {
  gulp.src('./scss/ionic.app.scss')
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.jsSrc, ['browserify']);
  gulp.watch(paths.jsSrc, ['lint']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});

// JSHint task
gulp.task('lint', function() {
  gulp.src(paths.jsSrc)
  .pipe(jshint())
  // You can look into pretty reporters as well, but that's another story
  .pipe(jshint.reporter('default'));
});

gulp.task('browserify', function() {
  return browserify(paths.appSrc, {debug: true})
    .bundle()
    .pipe(vinylSource('bundle.js'))
    .pipe(gulp.dest('./www/dist'));
});



