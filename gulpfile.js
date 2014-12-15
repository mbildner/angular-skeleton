var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var rimraf = require('rimraf');

gulp.task('app', function () {
	return gulp.src('./js/*.js')
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

gulp.task('default', ['app', 'vendor', 'views']);
