import gulp from 'gulp';
import watch from 'gulp-watch';

require('gulp-task-loader')();
let gulpsync = require('gulp-sync')(gulp);

import { path } from './config.gulp';

// Watch task config
const pug   = path.watch.pug;
const style = path.watch.style;
const js    = path.watch.js;
const img   = path.watch.img; 
const fonts = path.watch.fonts;

gulp.task('watch', () => {
    watch([pug],      (event, cb) => { gulp.start('pugBuild'); });
    watch([style],    (event, cb) => { gulp.start('styleBuild'); });
    watch([js],       (event, cb) => { gulp.start('jsBuild'); });
    watch([img],      (event, cb) => { gulp.start(['imageBuild']); });
    watch([fonts],    (event, cb) => { gulp.start('fontsBuild'); });
});

// SvgSpriteBuilder
gulp.task('svgSpriteBuild', gulpsync.sync([
  'svgRemoveSprite',
  'svgSpriteMonocolor',
  'svgSpriteMulticolor',
  'svgSpriteConcat',
  'svgRemoveTmp'
]));

// Build task config
gulp.task('build', gulpsync.sync([
    'cleanDist',
    'pugBuild',
    'jsBuild',
    'styleBuild',
    'fontsBuild',
    'svgSpriteBuild',
    'webpBuild',    
    'imageBuild'
]));

// Default task config
gulp.task('default', gulpsync.sync([
  'cleanDist',
  'build',
  'localServer',
  'watch'
  ]));
