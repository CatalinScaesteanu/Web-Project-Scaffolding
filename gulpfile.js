const gulp = require('gulp')
const watch = require('gulp-watch')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('sass', () => {
  return gulp.src('src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ compass: true, outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('build/css'))
})

gulp.task('watch', () => {
  gulp.watch('src/scss/**/*.scss', ['sass'])
})