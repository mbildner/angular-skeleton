'use strict';

var gulp = require('gulp');

gulp.task('watch', function () {
  return gulp.watch([
    'html/**/*',
    'js/**/*',
  ], ['default']);
});
