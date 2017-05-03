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
var livereload = require(`gulp-livereload`);
var del = require(`del`);
var open = require(`gulp-open`);
var sequnce = require(`gulp-run-sequence`);

gulp.task(`open`, function() {
  return gulp.src(`index.html`)
    .pipe(open());
})

gulp.task(`styles`, function() {
  return sass('app/styles/**/*.scss')
    .pipe(autoprefixer(`last 2 version`))
    .pipe(gulp.dest(`dist/assets/css`))
    .pipe(rename({suffix: `.min`}))
    .pipe(cssnano())
    .pipe(gulp.dest(`dist/assets/css`))
    // .pipe(notify({ message: `Styles task completed` }))
    .pipe(livereload());
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
    .pipe(livereload());
});

gulp.task(`clean`, function() {
    return del([`dist/assets/css`, `dist/assets/js`, `dist/assets/img`]);
});

gulp.task(`images`, function() {
  return gulp.src(`app/images/**/*`)
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest(`dist/assets/img`))
    // .pipe(notify({ message: `Images task completed` }))
    .pipe(livereload());
});

gulp.task(`index`, function() {
  return gulp.src(`index.html`)
    .pipe(livereload())
    // .pipe(notify({ message: `index changed and reloaded` }));
});

gulp.task(`serve`, function() {
    sequnce('clean', 'styles', 'scripts', 'open', 'watch', function() {
      console.log('Gulp serving...')
    })
});

gulp.task(`watch`, function() {
  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);
  gulp.watch(['index.html']).on('change', livereload.changed);
  // Watch .scss files
  gulp.watch(`app/styles/**/*.scss`, [`styles`]);
  // Watch .js files
  gulp.watch(`app/src/**/*.js`, [`scripts`]);
  // Watch image files
  gulp.watch(`app/images/**/*`, [`images`]);
  gulp.watch(`index.html`, [`scripts`, `styles`]);
});
