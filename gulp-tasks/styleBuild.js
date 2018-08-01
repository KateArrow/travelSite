import gulp           from 'gulp';                               // https://gulpjs.com/
import sass           from 'gulp-sass';                          // https://www.npmjs.com/package/gulp-sass
import importCss      from 'gulp-import-css';                    // https://www.npmjs.com/package/gulp-import-css
import gcmq           from 'gulp-group-css-media-queries';       // https://www.npmjs.com/package/gulp-group-css-media-queries
import cleanCSS       from 'gulp-clean-css';                     // https://github.com/scniro/gulp-clean-css
import browserSync    from 'browser-sync';                       // https://browsersync.io/docs/gulp
import autoprefixer   from 'gulp-autoprefixer';                  // https://www.npmjs.com/package/gulp-autoprefixer
import concat         from 'gulp-concat';                        // https://www.npmjs.com/package/gulp-concat
import uncss          from 'gulp-uncss';

import { path } from '../config.gulp';

const src = path.styleBuild.src;
const dist = path.styleBuild.dist;
const name = path.styleBuild.name;
const reload = browserSync.reload;
const uncssFiles = path.styleBuild.uncss;

module.exports = () => {
 return gulp.src(src)
   .pipe(sass.sync().on('error', sass.logError))
   .pipe(importCss())
   .pipe(concat(name))  
   .pipe(uncss({
        html: uncssFiles
    })) 
   .pipe(autoprefixer({
    browsers: ['last 3 versions'],
        cascade: false
    }))
   .pipe(gcmq())      
   .pipe(cleanCSS({compatibility: 'ie8', debug: true}), function(details) {
      console.log(details.name + ': ' + details.stats.originalSize);
      console.log(details.name + ': ' + details.stats.minifiedSize);
    })

    .pipe(gulp.dest(dist))
    .pipe(reload({stream: true}));
};