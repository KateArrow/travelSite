import gulp from 'gulp';                      // https://gulpjs.com/
import browserSync from 'browser-sync';       // https://browsersync.io/docs/gulp

import { path } from '../config.gulp';

const src  = path.fontsBuild.src;
const dist = path.fontsBuild.dist;    
const reload = browserSync.reload;

module.exports = () => {
    return gulp.src(src)
        .pipe(gulp.dest(dist))
        .pipe(reload({stream: true}));              
};