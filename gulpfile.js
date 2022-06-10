const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
 
function style() {
    return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
}
 
function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('src/scss/*.scss', style).on('change', browserSync.reload);
    gulp.watch('src/*.html').on('change', browserSync.reload);
    gulp.watch('src/js/*.js').on('change', browserSync.reload);
}
 
exports.style = style;
exports.watch = watch;
 

