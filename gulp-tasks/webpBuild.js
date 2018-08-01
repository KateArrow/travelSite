import gulp from 'gulp';                      // https://gulpjs.com/
import webp from 'gulp-webp';                 // https://www.npmjs.com/package/gulp-webp

import { path } from '../config.gulp';

const src  = path.webpBuild.src;
const dist = path.webpBuild.dist; 

module.exports = () => {
    return gulp.src(src)
       .pipe(webp())
       .pipe(gulp.dest(dist));
};