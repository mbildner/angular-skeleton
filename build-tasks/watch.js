/* jshint node:true */
'use strict';

var gulp = require('gulp');

gulp.task('watch', ['default'], function () {
  return gulp.watch([
    'html/**/*',
    'js/**/*',
  ], ['default']);
});
