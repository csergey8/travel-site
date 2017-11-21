

var gulp = require('gulp');
var watch = require('gulp-watch');

gulp.task('default', function(){
    console.log('!!!')
});

gulp.task('html', function(){

});

gulp.task('styles', function(){
    
    });

gulp.task('watch', function() {

    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('styles');
    });

});