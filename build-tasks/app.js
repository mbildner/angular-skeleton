/* jshint node:true */
'use strict';

var gulp = require('gulp');

var ngAnnotate = require('gulp-ng-annotate');
var concat = require('gulp-concat');

gulp.task('app', function () {
  return gulp.src('./js/**/*.js')
    .pipe(ngAnnotate())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js'));
});
