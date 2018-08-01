import gulp from 'gulp';                      // https://gulpjs.com/
import image from 'gulp-image';               // https://github.com/1000ch/gulp-image
import browserSync from 'browser-sync';       // https://browsersync.io/docs/gulp

import { path } from '../config.gulp';

const src = path.imageBuild.src;
const dist = path.imageBuild.dist;
const reload = browserSync.reload;

module.exports = () => {
    return gulp.src(src)
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: false,
      jpegoptim: true,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10
    }))
    .pipe(gulp.dest(dist))
    .pipe(reload({stream: true}));          
};