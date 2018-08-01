import gulp from 'gulp';                      // https://gulpjs.com/
import concat from 'gulp-concat';             // https://www.npmjs.com/package/gulp-concat

import { path } from '../config.gulp';

const nameMonocolor = path.svgSpriteBuild.svgNameMonocolor;    
const nameMulticolor = path.svgSpriteBuild.svgNameMulticolor;    
const file = path.svgSpriteBuild.newFileName;
const dist = path.svgSpriteBuild.dist;

module.exports = () => {
    return gulp.src([nameMulticolor, nameMonocolor])
        .pipe(concat(file))
        .pipe(gulp.dest(dist));
};