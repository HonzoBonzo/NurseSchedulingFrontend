var gulp = require(`gulp`);
var sass = require(`gulp-ruby-sass`);
var autoprefixer = require(`gulp-autoprefixer`);
var cssnano = require(`gulp-cssnano`);
var jshint = require(`gulp-jshint`);
var uglify = require(`gulp-uglify`);
var imagemin = require(`gulp-imagemin`);
var rename = require(`gulp-rename`);
var concat = require(`gulp-concat`);
var notify = require(`gulp-notify`);
var cache = require(`gulp-cache`);
var connect = require(`gulp-connect`);
var del = require(`del`);
var open = require(`gulp-open`);
var sequnce = require(`gulp-run-sequence`);
var nodemon = require('gulp-nodemon');
var exec = require('gulp-exec');

gulp.task(`nodemon`, function() {
  nodemon({script: '../NurseSchedulingServer/app.js'})
})

gulp.task(`open`, function() {
  var options = {
    uri: 'http://localhost:8080',
    app: 'chrome'
  };

  return gulp.src(`index.html`)
    .pipe(open(options));
})

gulp.task(`styles`, function() {
  return sass('app/styles/**/*.scss')
    .pipe(autoprefixer(`last 2 version`))
    .pipe(gulp.dest(`dist/assets/css`))
    .pipe(rename({suffix: `.min`}))
    .pipe(cssnano())
    .pipe(gulp.dest(`dist/assets/css`))
    // .pipe(notify({ message: `Styles task completed` }))
    .pipe(connect.reload());
});

gulp.task(`scripts`, function() {
  return gulp.src(`app/src/**/*.js`)
    .pipe(jshint(`.jshintrc`))
    // .pipe(jshint.reporter(`default`))
    // .pipe(concat(`main.js`))
    .pipe(gulp.dest(`dist/assets/js`))
    // .pipe(rename({suffix: `.min`}))
    // .pipe(uglify())
    // .pipe(gulp.dest(`dist/assets/js`))
    // .pipe(notify({ message: `Scripts task completed` }))
    .pipe(connect.reload());
});

gulp.task(`clean`, function() {
    return del([`dist/assets/css`, `dist/assets/js`, `dist/assets/img`]);
});

gulp.task(`images`, function() {
  return gulp.src(`app/images/**/*`)
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(`dist/assets/img`))
    // .pipe(notify({ message: `Images task completed` }))
    .pipe(connect.reload());
});

gulp.task(`index`, function() {
  return gulp.src(`index.html`)
    .pipe(connect.reload())
    // .pipe(notify({ message: `index changed and reloaded` }));
});

gulp.task(`connect`, function() {
  connect.server({
    livereload: true
  })
})

gulp.task('default', ['watch', 'connect']);

gulp.task(`serve`, function() {
    sequnce(
      'nodemon', 
      'clean', 
      'styles', 
      'scripts', 
      'open', 
      `connect`, 
      `watch`, 
      function() {
      console.log('Gulp serving and watching for changes...')
    })
});

gulp.task(`watch`, function() {
  // Create LiveReload server
  // livereload.listen();
  // Watch any files in dist/, reload on change
  // gulp.watch(['dist/**']).on('change', livereload.changed);

  gulp.watch('index.html', [`index`]);
  gulp.watch(`app/styles/**/*.scss`, [`styles`]);
  gulp.watch(`app/src/**/*.js`, [`scripts`]);
  gulp.watch(`app/images/**/*`, [`images`]);
});
