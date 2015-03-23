/* jshint node:true */
'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var lib = require('bower-files')();

gulp.task('vendor', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/js'));
});
