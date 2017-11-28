var gulp = require('gulp');
var webpack = require('webpack');

gulp.task('scripts', ['modernizr'], function(callback) {
    webpack(require('../../webpack.config.js'), function(err, stats){
        if (err) {
            console.log('!!!!!MY ERRR' + err.toString());
        }
        console.log('webpack is run');
        console.log(stats.toString());
        callback();
    });
});