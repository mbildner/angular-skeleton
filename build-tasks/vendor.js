/* jshint node:true */
'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var mainBowerFiles = require('main-bower-files');


gulp.task('vendor', function () {
  return gulp.src(mainBowerFiles())
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/js'));
});
