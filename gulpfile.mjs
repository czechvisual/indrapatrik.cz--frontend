import gulp from 'gulp';
import sassLib from 'sass';
import gulpSass from 'gulp-sass';
import sassLint from 'gulp-sass-lint';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import htmlmin from 'gulp-htmlmin';
import imagemin from 'gulp-imagemin';
import terser from 'gulp-terser';
import php2html from 'gulp-php2html';
import svgmin from 'gulp-svgmin';
import eslint from 'gulp-eslint';
import sitemap from 'gulp-sitemap';
import browserSyncModule from 'browser-sync';

const { create: createBrowserSync } = browserSyncModule;
const browserSync = createBrowserSync();
const sass = gulpSass(sassLib);

// Asstes
function assets() {
  return gulp.src('assets/img/*.{jpg,jpeg,png,gif,webp,svg}')
    .pipe(imagemin())
    .pipe(gulp.dest('public/assets/img'));
}

function favicon() {
  return gulp.src('favicon.ico')
      .pipe(imagemin())
      .pipe(gulp.dest('public'));
}

function svg() {
  return gulp.src('assets/img/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('public/assets/img'));
}

// Styles
function styles() {
  return gulp.src('assets/sass/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/assets/css'))
    .pipe(browserSync.stream());
}

// Scripts
function scripts() {
  return gulp.src('assets/js/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('public/assets/js'));
}

// PHP to HTML
function phpToHTML() {
  return gulp.src('index.php')
    .pipe(php2html())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'));
}

// Lint
function lintStyle() {
  return gulp.src('assets/sass/**/*.scss')
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
}

function lintScript() {
  return gulp.src(['assets/js/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

// Generate sitemap
function generateSitemap() {
  return gulp.src('public/**/*.html', {
    read: false
  })
    .pipe(sitemap({
      siteUrl: 'https://indrafinance.cz'
    }))
    .pipe(gulp.dest('public'));
}

// Watch
function watch() {
  browserSync.init({
    proxy: 'localhost:3000',
    open: false,
  });

  gulp.watch('assets/sass/**/*.scss', styles);
  gulp.watch('**/*.php').on('change', browserSync.reload);
  gulp.watch('**/*.php').on('change', browserSync.reload);
  gulp.watch('assets/img/*.{jpg,jpeg,png,gif,svg}', assets);
  gulp.watch('assets/img/*.svg', svg);
  gulp.watch('assets/sass/**/*.scss', lintStyle);
  gulp.watch('assets/js/**/*.js', lintScript);
  gulp.watch('public/**/*.html', generateSitemap);
}

export {
  assets,
  favicon,
  svg,
  styles,
  scripts,
  phpToHTML,
  lintStyle,
  lintScript,
  generateSitemap,
  watch,
};

export default gulp.parallel(assets, favicon, svg, scripts, phpToHTML, generateSitemap, styles);
