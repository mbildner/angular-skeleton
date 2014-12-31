var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var rimraf = require('rimraf');

var ngAnnotate = require('gulp-ng-annotate');
var templateCache = require('gulp-angular-templatecache');

var jshint = require('gulp-jshint');
var packageJSON  = require('./package');
var jshintConfig = packageJSON.jshintConfig;
jshintConfig.lookup = false;

const NG_MODULE_NAME = 'app';

gulp.task('lint', function() {
  return gulp.src('./js/**/*.js')
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter('default'));
});

gulp.task('clean', function () {
  rimraf.sync('./dist/');
});

gulp.task('app', function () {
  return gulp.src('./js/**/*.js')
    .pipe(ngAnnotate())
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('vendor', function () {
	return gulp.src(mainBowerFiles())
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('views', function () {
	return gulp.src([
    './html/**/*.html',
    '!./html/index.html'
    ])
    .pipe(templateCache('templates.js', {
      module: NG_MODULE_NAME,
      root: 'views'
    }))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['clean', 'lint', 'views', 'app', 'vendor']);
