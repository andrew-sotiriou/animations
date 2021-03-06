// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') 
    .pipe(sass())
    .pipe(gulp.dest('html/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass', 'move-html'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  gulp.watch('app/index.html', ['move-html']); 
  // Other watchers
})

gulp.task('move-html', function(){
  return gulp.src('app/index.html')
    .pipe(gulp.dest('html'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'html'
    },
  })
})

// Default Task
gulp.task('default', ['watch']);