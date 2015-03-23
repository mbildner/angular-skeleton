/* jshint node:true */
'use strict';

var gulp   = require('gulp');
var concat = require('gulp-concat');
var lib = require('bower-files')();

gulp.task('css', function () {
  return gulp.src(lib.ext('css').files)
    .pipe(concat('app.css'))
    .pipe(gulp.dest('dist/css'));
});
