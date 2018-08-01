import gulp from 'gulp';                      // https://gulpjs.com/
import clean from 'gulp-clean';               // https://www.npmjs.com/package/gulp-clean

import { path } from '../config.gulp';

const nameMonocolor = path.svgSpriteBuild.svgNameMonocolor;  
const nameMulticolor = path.svgSpriteBuild.svgNameMulticolor;    

module.exports = () => {
    return gulp.src([nameMonocolor, nameMulticolor], {read: false})
        .pipe(clean());
};