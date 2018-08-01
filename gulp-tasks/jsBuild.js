import gulp from 'gulp';                      // https://gulpjs.com/
import concat from 'gulp-concat';             // https://www.npmjs.com/package/gulp-concat
import gulpRigger from 'gulp-rigger';         // https://www.npmjs.com/package/gulp-rigger
import browserSync from 'browser-sync';       // https://browsersync.io/docs/gulp

import { path } from '../config.gulp';

const src    = path.jsBuild.src;
const dist   = path.jsBuild.dist;
const name   = path.jsBuild.distFileName;
const reload = browserSync.reload;

module.exports = () => {
    return gulp.src(src)
      .pipe(gulpRigger())
      .pipe(concat(name))
      .pipe(gulp.dest(dist))
      .pipe(reload({stream: true}));      
};