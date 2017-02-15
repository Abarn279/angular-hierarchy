var gulp = require('gulp');
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var webpack = require('gulp-webpack');

var wpConfig = require('./webpack.config');

gulp.task('build', ['clean', 'js', 'css']);

gulp.task('js', buildJs);
gulp.task('css', buildCss);

gulp.task('watch', function() {
    gulp.watch(['src/**/*.js'], ['js']);
    gulp.watch(['styles/**/*.scss'], ['css']);
});

gulp.task('clean', function() {
    return gulp.src('dist/', { read: false })
        .pipe(clean());
});

function buildJs() {
    return gulp.src('src/**/*.js')
        .pipe(webpack(wpConfig))
        .pipe(gulp.dest('dist/'))
}

function buildCss() {
    return gulp.src('styles/site.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/'));
}