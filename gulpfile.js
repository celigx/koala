const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass")(require('sass'));
const prefix = require("gulp-autoprefixer");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const cleanCSS = require("gulp-clean-css");
const minify = require("gulp-minify");

// compile css to sass
const style = async () => {
  return (
    gulp
      .src("src/sass/**/*.sass")
      .pipe(
        plumber({ errorHandler: notify.onError("Error: <%= error.message %>") })
      )
      .pipe(sass().on("error", sass.logError))
      .pipe(prefix("last 2 versions", "last 2 iOS versions", "android >= 4.4"))
      .pipe(gulp.dest("src/css"))
      .pipe(browserSync.stream())
  );
}

const watch = async () => {
  browserSync.init({
    server: {
      baseDir: "./src",
    },
    notify: false,
  });
  gulp.watch("src/sass/**/*.sass", style);
  gulp.watch("src/*.html").on("change", browserSync.reload);
  gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
}

const moveHTML = async () => {
  return gulp.src("src/*.html").pipe(gulp.dest("dist/"));
};

const moveAssets = async () => {
  return gulp.src("src/assets/*.png").pipe(gulp.dest("dist/assets"));
};

const minifyCSS = async () => {
  return gulp.src("src/css/*.css").pipe(cleanCSS()).pipe(gulp.dest("dist/css"));
};

const minifyJS = async () => {
  return gulp.src("src/js/*.js").pipe(minify()).pipe(gulp.dest("dist/js"));
};

gulp.task("default", gulp.parallel(style, watch));
gulp.task("build", gulp.parallel(moveHTML, moveAssets, minifyCSS, minifyJS));
