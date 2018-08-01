import gulp from 'gulp';                      // https://gulpjs.com/
import clean from 'gulp-clean';               // https://www.npmjs.com/package/gulp-clean

import { path } from '../config.gulp';

const dist = path.clean;

module.exports = () => {
    return gulp.src(dist, {read: false})
        .pipe(clean());
};