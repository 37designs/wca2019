var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sassGlob = require('gulp-sass-glob'),
	watch = require('gulp-watch');


var sassConfig = {
	inputDirectory: 'sass/style.scss',
	outputDirectory: 'stylesheets/',
	options: {
		outputStyle: 'expanded'
	}
}

gulp.task('styles', function() {
	return gulp
		.src(sassConfig.inputDirectory)
		.pipe(sassGlob())
		.pipe(sass(sassConfig.options).on('error', sass.logError))
		.pipe(gulp.dest(sassConfig.outputDirectory));
});


gulp.task('watch', function() {
	gulp.watch('sass/*.scss', gulp.series('styles'));
});