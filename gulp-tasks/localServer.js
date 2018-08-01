import gulp from 'gulp';                      // https://gulpjs.com/
import browserSync from 'browser-sync';       // https://browsersync.io/docs/gulp

import { serverConfig } from '../config.gulp';

module.exports = () => {
    browserSync(serverConfig);
};