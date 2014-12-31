var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var packageJSON  = require('./package');
var jshintConfig = packageJSON.jshintConfig;

jshintConfig.lookup = false;

var rimraf = require('rimraf');

gulp.task('lint', function() {
  return gulp.src('./js/**/*.js')
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter('default'));
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
	return gulp.src('./html/*.html')
		.pipe(gulp.dest('dist/'));
});

gulp.task('default', ['lint', 'app', 'vendor', 'views']);
