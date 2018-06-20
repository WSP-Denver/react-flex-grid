var gulp = require("gulp");
var sass = require("sass");
var sourcemaps = require("gulp-sourcemaps");
var babel = require("gulp-babel");
var concat = require("gulp-concat");

gulp.task("default", function () {
  return gulp.src("src/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat("index.js"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("public"));
});
