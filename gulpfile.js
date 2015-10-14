var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync',function(){
	var files = [
		'templates/*/*.html'
	];

	browserSync.init(files, {
		server: {
			baseDir: ''
		}
	});
});