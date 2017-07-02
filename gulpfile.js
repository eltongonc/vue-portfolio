var gulp = require("gulp"),
    nodemon = require("gulp-nodemon"),
    plumber = require("gulp-plumber"),
    livereload = require("gulp-livereload"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    eslint = require("gulp-eslint");

var esConfig = require("./.eslintrc.js");


gulp.task("sass", function () {
    gulp.src("./public/css/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./public/css/"))
        .pipe(livereload());
});

gulp.task("watch", function() {
    gulp.watch("./public/css/**/*.scss", ["sass"]);
});

gulp.task("develop", function () {
    livereload.listen();
    nodemon({
        script: "app.js",
        ext: "js handlebars coffee",
        stdout: false
    }).on("readable", function () {
        this.stdout.on("data", function (chunk) {
            if(/^Express server listening on port/.test(chunk)){
                livereload.changed(__dirname);
            }
        });
        this.stdout.pipe(process.stdout);
        this.stderr.pipe(process.stderr);
    });
});

gulp.task("lint", function() {
    return gulp.src(["**/*.js","!node_modules/**"])
        .pipe(eslint(esConfig))
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

gulp.task("default", [
    "sass",
    "develop",
    "watch"
]);
