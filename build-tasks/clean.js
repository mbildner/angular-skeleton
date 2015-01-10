/* jshint node:true */
'use strict';

var gulp = require('gulp');
var rimraf = require('rimraf');

gulp.task('clean', function () {
  rimraf.sync('./dist/');
});
