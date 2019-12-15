var gulp = require('gulp');
const { series, parallel } = require('gulp');
var sass = require('gulp-sass');
var exec = require('child_process').exec;
var template_name = 'theme';

function css() {
    return gulp.src('assets/sass/main.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('assets/css/'));
}

function scripts(cb) {
    exec('npm run build', function(err, stdout, stderr) {
        cb(err);
    });
}

function docker_cp(cb) {
    exec('docker exec wp_headless_php rm /var/www/html/wp-content/themes/' + template_name + ' -rf ', function (err, stdout, stderr) {
        exec('docker cp . wp_headless_php:/var/www/html/wp-content/themes/' + template_name , function (err, stdout, stderr) {
            exec('docker exec --user root  wp_headless_php chown www-data:www-data /var/www/html/wp-content/themes/' + template_name + '/ -R', function (err, stdout, stderr) {
                cb(err);
            });
        });
    });
};

function watchFiles() {
    gulp.watch('./assets/ts/*', series(parallel(css, scripts), docker_cp));
    gulp.watch('./assets/sass/*', series(css, docker_cp));
    gulp.watch('./*', docker_cp);
}

exports.watch = watchFiles;
exports.css = css;
exports.scripts = scripts;
exports.build = parallel(css, scripts);
exports.docker_cp = docker_cp;
