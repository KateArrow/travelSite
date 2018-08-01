const SRC_DIR  = './src/';
const DIST_DIR = './public/';

let path = {

    jsBuild: {
        src : `${SRC_DIR}assets/js/main.js`,
        dist: `${DIST_DIR}js/`,
        distFileName: 'main.js'
    },

    styleBuild: {
        src : `${SRC_DIR}assets/styles/style.scss`,
        dist: `${DIST_DIR}css/`,
        name: 'style.css',
        uncss: [`${DIST_DIR}index.html`]
    },

    imageBuild: {
        src : `${SRC_DIR}assets/img/**/*.+(jpg|png|gif|svg|webp)`,
        dist: `${DIST_DIR}img/`
    },

    webpBuild: {
        src : `${SRC_DIR}assets/img**/*.+(jpg|png|)`,
        dist: `${SRC_DIR}assets/`
    },

    pugBuild: {
        src : `${SRC_DIR}pages/*.pug`,
        dist: `${DIST_DIR}`
    },

    fontsBuild: {
        src : `${SRC_DIR}assets/fonts/**/*.*`,
        dist: `${DIST_DIR}fonts`
    },

    watch: {
        pug   : `${SRC_DIR}**/*.pug`,
        js    : `${SRC_DIR}**/*.js`,
        style : `${SRC_DIR}**/*.scss`,
        img   : `${SRC_DIR}assets/img/**/*.+(jpg|png|gif|svg|webp)`,
        fonts : `${SRC_DIR}assets/fonts/**/*.*`
    },

    svgSpriteBuild: {
        svgSrcMonocolor    : `${SRC_DIR}assets/sprite/svg/monocolor/*.svg`,
        svgNameMonocolor   : `${SRC_DIR}assets/sprite/svg/monocolor.svg`,
        svgSrcMulticolor   : `${SRC_DIR}assets/sprite/svg/multicolor/*.svg`,
        svgNameMulticolor  : `${SRC_DIR}assets/sprite/svg/multicolor.svg`,

        newFileName  : `svgSprite.svg`,
        dist         : `${DIST_DIR}img/`,
        distFile     : `${DIST_DIR}img/svgSprite.svg`
    },

    pngSpriteBuild: {
        src          : `${SRC_DIR}assets/sprite/png/*.png`,
        name         : `sprite`,
        dist         : `${DIST_DIR}img`,
        cssPath      : `${SRC_DIR}assets/styles/global/`,
        styleFileName: 'global.sprite',
        processor    : 'scss'
    },

    clean: DIST_DIR
};

const serverConfig = {
    server: {
        baseDir: DIST_DIR
    },
    tunnel   : true,
    host     : 'localhost',
    port     : 3000,
    logPrefix: "Frontend_Project"
};

export { path, serverConfig };