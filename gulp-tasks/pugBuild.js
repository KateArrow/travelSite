import gulp           from 'gulp';                   // https://gulpjs.com/
import pug            from 'gulp-pug';               // https://www.npmjs.com/package/gulp-pug
import plumber        from 'gulp-plumber';           // https://www.npmjs.com/package/gulp-plumber
import browserSync    from 'browser-sync';           // https://browsersync.io/docs/gulp

import { path } from '../config.gulp';

const src = path.pugBuild.src;
const dist = path.pugBuild.dist;
const reload = browserSync.reload;

module.exports = () => {
    return gulp.src(src)
    .pipe(pug({
        pretty: true
    }))
    .pipe(plumber())
    .pipe(gulp.dest(dist))
    .pipe(reload({stream: true}));    
};