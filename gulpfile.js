var gulp =require("gulp");
var concat= require("gulp-concat");
var sass = require('gulp-sass');



gulp.task('sass', function () {
  return gulp.src('src/sass/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'));
});

// gulp.task('sass:watch', function () {
//   gulp.watch('./sass/**/*.scss', ['sass']);
// });
gulp.task("")
