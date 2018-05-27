"use strict";

var gulp = require("gulp"); //сам gulp
var less = require("gulp-less"); //конвертор из less в css
var plumber = require("gulp-plumber"); //выводит в консоль сообщения об ошибке и не дает npm-ке прекратить работу из-за ошибки
var postcss = require("gulp-postcss"); //нужен для автопрефиксера
var autoprefixer = require("autoprefixer"); //сам автопрефиксер
var server = require("browser-sync").create(); //создает виртуальный сервер, перегружает браузер
var posthtml = require("gulp-posthtml"); //кажется, нужен для include
var include = require("posthtml-include"); //сам include svg-шек в разметку
const gulpBemCss = require('gulp-bem-css'); //создает бэм-блоки для лесс-файлов, вытаскивая бэм-дерево из разметки
const webp = require('gulp-webp'); //конвертирует изображения в формат webp
var svgmin = require('gulp-svgmin'); //нужен для запуска пачки тасков последовательно.
var minify = require('gulp-csso'); //минимизирует css
var run = require('run-sequence'); //нужен для запуска пачки тасков последовательно.
var rename = require("gulp-rename"); //переименовывает файлы
var imagemin = require('gulp-imagemin'); //минимизирует css
var htmlmin = require('gulp-htmlmin'); //создает svg-sprite
var svgmin = require('gulp-svgmin'); //минимизирует svg
var del = require('del'); //удаляет файлы и папки
var uglify = require('gulp-uglify'); //минизирует js
var pump = require('pump'); //нужен для работы gulp-uglify

gulp.task("style", function() {
  gulp.src("source/less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("./css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("./css"))
    .pipe(server.stream());
});

gulp.task("serve", function() { //gulp.task("serve", ["style"], function() { до полноценной сборки при запуске сервера запускаем таск стайл, чтобы следить за css
  server.init({
    server: ".",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/less/**/*.less", ["style"]);
  gulp.watch("source/*.html", ["htmlmin"]).on("change", server.reload);
});

gulp.task("html", function () {
  return gulp.src("source/*.html")
    .pipe(posthtml([include()]))
    .pipe(gulp.dest("source"));
});

gulp.task('bem-less', () => {
  return gulp.src('source/*.html')
    .pipe(gulpBemCss({
      folder: 'source/less',
      extension: 'less',
      elementSeparator: '__',
      modifierSeparator: '--'
    }))
    .pipe(gulp.dest('source'));
});

gulp.task('webp', () => {
  return gulp.src('source/img/*.{png,jpg}')
    .pipe(webp())
    .pipe(gulp.dest('source/img'))
});

gulp.task('svg-optim', function () {
  return gulp.src('source/img/logo-mobile.svg')
      .pipe(svgmin())
      .pipe(gulp.dest('source/svgo'));
});

gulp.task('htmlmin', function() {
  return gulp.src("source/*.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("."));
});

gulp.task("images-min", function () {
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("source/img"));
})

gulp.task('svg-optim', function () {
  return gulp.src('source/img/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('source/img'));
});

gulp.task("copy", function () {
  return gulp.src([
      "source/fonts/**/*.*",
      "source/img/**",
      "source/js/**"
    ], {
      base: "source" //эта настройка говорит gulp'у от какой папки отталкиваться, то есть не только скопировать изображения в папке img, но и саму папку тоже.
    })
  .pipe(gulp.dest("."));
})

gulp.task("clean", function () {
  return del(["fonts", "js", "img"]);
});

gulp.task("compress", function (cb) {
  pump([
      gulp.src("./js/*.js"),
      uglify(),
      gulp.dest("./js")
    ],
    cb
  );
});

gulp.task("build", function (done) {
  run(
    "clean",
    "copy",
    "style",
    "htmlmin",
    "compress",
    done
  );
});
