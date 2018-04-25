const gulp 			= require('gulp');
const scss 			= require('gulp-ruby-sass'); 
const connect 		= require('gulp-connect');
const sourcemaps 	= require('gulp-sourcemaps');
const open 			= require('gulp-open');

const config = {
	"src": [
	  "src/styles/main.scss"
	],
	"source": "src/",
	"localhost": {
	  "dir": "src/",
	  "path": "http://localhost:8000/"
	},
	"dist": "dist/",
	"buildType": "DEV",
	"version": "0.00"
};

gulp.task('test', function(){
	console.log('asdfdsa');
});


//
// Compile all SCSS files
//
gulp.task('compile-scss', () => {
	const path = config.src[0];
	scss(path, { sourcemap: true })
		.on('error', scss.logError)
		.pipe(sourcemaps.write('./', {
			includeContent: true,
			sourceRoot: 'source'
		}))
		.pipe(gulp.dest(`${config.source}/styles`));	
});

//
//* @Robustness add updated .map files and JS files, Watch ALL HTML and SCSS files
//
gulp.task('watch', () => {
	const path = config.src[0];
	//* HTML, No payload just reload
	gulp.watch(`${config.source}/*.html`, (saved) => {
		gulp.src(saved.path)
			.pipe(connect.reload())
	});

	// SCSS
	gulp.watch(`${config.source}/styles/*.scss`, (saved) => {

		scss(path, { sourcemap: true })
			.on('error', scss.logError)
			.pipe(sourcemaps.write('./', {
				includeContent: true,
				sourceRoot: 'source'
			}))
			.pipe(gulp.dest(`${config.source}/styles`))
			.pipe(connect.reload());
	});


	// JS, No payload just reload
	gulp.watch(`${config.source}/scripts/**.js`, (saved) => { 
		gulp.src(saved.path)
			.pipe(connect.reload())
	});
});

//
// Local server
//
gulp.task('server', function() {
	const path = `${config.localhost.dir}`;

	// Serve config data
	connect.server({
		name: 'Dev App',
		root: path,
		port: 8000,
		livereload: true
	});
});

//
// Open to localhost after server start
//
gulp.task('open', function(){
	gulp.src(__filename)
  		.pipe(open({ uri: `${config.localhost.path}` }));
});

gulp.task('serve', ['compile-scss', 'server', 'open', 'watch']);