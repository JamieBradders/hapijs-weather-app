'use strict';

const gulp   = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('scripts', () => {
  return gulp.src('./assets/scripts/*.js')
    // .pipe(uglify())
    .pipe(gulp.dest('./public/js'));
});
