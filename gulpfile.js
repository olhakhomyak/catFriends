var gulp            = require('gulp'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    concat          = require('gulp-concat'),
    cssmin          = require('gulp-cssmin'),
    del             = require('del'),
    ngAnnotate      = require('gulp-ng-annotate'),
    plumber         = require('gulp-plumber'),
    rename          = require('gulp-rename'),
    runSequence     = require('run-sequence'),
    sass            = require('gulp-sass'),
    uglify          = require('gulp-uglify');

var buildDir        = 'bin/',
    depsJS          = [ './app/bower_components/angular/angular.min.js',
                        './app/bower_components/jquery/dist/jquery.min.js',
                        './app/bower_components/tether/dist/js/tether.min.js',
                        './app/bower_components/bootstrap/dist/js/bootstrap.min.js',
                        './app/bower_components/angular-route/angular-route.min.js',
                        './app/bower_components/angular-resource/angular-resource.min.js'],
    appJS           = [ './app/src/app.js',
                        './app/src/services/user-profile.service.js',
                        './app/src/constants/content-constants.js',
                        './app/src/constants/app-constants.js',
                        './app/src/directives/navigation-buttons.js',
                        './app/src/directives/friends-section.js',
                        './app/src/directives/user-profile.js',
                        './app/src/directives/current-user.js'],
    depsStyles      = [ './app/bower_components/bootstrap/dist/css/bootstrap.min.css',
                        './app/bower_components/components-font-awesome/css/font-awesome.min.css'],
    appStyles       = [ './app/src/assets/scss/style.scss'];


// **********************
// Minify js files
// **********************
gulp.task('jsDeps', function () {
   var depsJs = gulp.src(depsJS);
    return depsJs
        .pipe(plumber())
        .pipe(concat('all_dependencies.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('./app/src/scripts/'));
});

gulp.task('jsDev', function () {
    var devJs = gulp.src(appJS);
    return devJs
        .pipe(plumber())
        .pipe(concat('all.js'))
        .pipe(ngAnnotate())
        .pipe(gulp.dest('./app/src/scripts/'));
});



// **********************
// Minify css files
// **********************
gulp.task('styleDeps', function () {
    var depsStyle = gulp.src(depsStyles);
    return depsStyle
        .pipe(plumber())
        .pipe(cssmin())
        .pipe(concat('dependencies_style.min.css'))
        .pipe(gulp.dest('./app/src/assets/css/'))
        .pipe(reload({stream:true}));
});

gulp.task('styleDev', function () {
    var devStyles = gulp.src(appStyles);
    return devStyles
        .pipe(plumber())
        .pipe(sass())
        .pipe(cssmin())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./app/src/assets/css/'))
        .pipe(reload({stream:true}));
});


gulp.task('icons', function() {
    var faIcons = gulp.src('./app/bower_components/components-font-awesome/fonts/**.*');
    return faIcons
        .pipe(gulp.dest('./app/src/assets/fonts'));
});


gulp.task('watch', function () {
    gulp.watch('./app/src/**/*.js', ['jsDev']);
    gulp.watch('./app/src/assets/scss/style.scss', ['styleDev']);
    gulp.watch('./app/src/templates/*.html');
    gulp.watch('./app/src/index.html');
});


gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: "./app/src"
        }
    })
});

gulp.task('clean', function () {
   return del([
       './app/src/assets/css/*'
   ])
});

gulp.task('default', function (callback) {
    runSequence('clean', ['jsDeps', 'jsDev', 'styleDeps', 'styleDev', 'icons'],'watch', 'browser-sync', callback)
});