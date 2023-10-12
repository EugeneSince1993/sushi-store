const { src, dest, watch } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');

function css() {
  return src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(dest('./dist/assets/'));
}

function js() {
  return src('./src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(dest('./dist/assets/'));
}

function html() {
  return src('./src/*.html')
    .pipe(dest('./dist/'));
}

function watchFiles() {
  watch('./src/sass/**/*.scss', css);
  watch('./src/js/*.js', js);
  watch('./src/*.html', html);
}

exports.css = css;
exports.js = js;
exports.html = html;
exports.watch = watchFiles;
