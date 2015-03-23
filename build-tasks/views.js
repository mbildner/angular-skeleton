/* jshint node:true */
'use strict';

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');
var NG_MODULE_NAME = 'app';

gulp.task('views', function () {
  return gulp.src([
    './html/**/*.html',
    '!./html/index.html'
    ])
    .pipe(templateCache('templates.js', {
      module: NG_MODULE_NAME,
      root: 'views'
    }))
    .pipe(gulp.dest('dist/js'));
});
