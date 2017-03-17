var gulp = require('gulp');
var sass = require('gulp-sass');
// var autoprefixer = require('gulp-autoprefixer');
var watch = require('gulp-watch');


gulp.task('default', ['styles'], function() {
	console.log('Hello World!');
});

gulp.task('styles', function() {
return watch('sass/**/*.scss', { ignoreInitial: false })
		.pipe(gulp.dest('./css'));
		// .pipe(autoprefixer({
		// 	browsers: ['last 2 versions']
		// }))
});