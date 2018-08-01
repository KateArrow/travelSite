import gulp from 'gulp';                      // https://gulpjs.com/
import clean from 'gulp-clean';               // https://www.npmjs.com/package/gulp-clean

import { path } from '../config.gulp';

const name = path.svgSpriteBuild.distFile;  

module.exports = () => {
    return gulp.src(name, {read: false})
        .pipe(clean());
};