var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');


gulp.task('vendor', function() {
    return gulp.src(mainBowerFiles())
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('dist/js'));
});
