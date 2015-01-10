/* jshint node:true */
'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

var packageJSON  = require('../package');
var jshintConfig = packageJSON.jshintConfig;
jshintConfig.lookup = false;

gulp.task('lint', function() {
  return gulp.src('js/**/*.js')
    .pipe(jshint(jshintConfig))
    .pipe(jshint.reporter('default'));
});
