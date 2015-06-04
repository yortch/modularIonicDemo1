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
  src: ['./www/js/*.js'],
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
  gulp.watch([paths.src, paths.appSrc, paths.sass], ['lint','browserify','sass']);
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
  gulp.src('./www/js/*.js')
  .pipe(jshint())
  // You can look into pretty reporters as well, but that's another story
  .pipe(jshint.reporter('default'));
});

gulp.task('browserify-old', function() {
  // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
  gulp.src(['./www/js/app.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true,
  }))
  // Bundle to a single file
  .pipe(concat('bundle.js'))
  .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
  // Add transformation tasks to the pipeline here.
  .pipe(sourcemaps.write('./')) // writes .map file
  // Output it to our dist folder
  .pipe(gulp.dest('./www/dist'));
});

gulp.task('browserify', function() {
  return browserify('./www/js/app.js', {debug: true, sourcemaps: true})
    .bundle()
    .pipe(vinylSource('bundle.js'))
    //.pipe(exorcist(path.join(__dirname, 'www/dist/bundle.js.map')))
    .pipe(gulp.dest('./www/dist'));
});



