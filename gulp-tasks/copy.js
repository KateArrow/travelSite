import gulp from 'gulp';                 // https://gulpjs.com/

module.exports = function() {
    return gulp.src("src/**/*")
        .pipe(gulp.dest("dist/**/*"));
};