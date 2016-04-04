// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var jshint = require('gulp-jshint');
var minifycss = require('gulp-minify-css');
//var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// 检查脚本
/*gulp.task('lint', function() {
    gulp.src('./js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});*/

// 编译Sass
/*gulp.task('sass', function() {
    gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});*/

// 合并，压缩JS
gulp.task('scripts', function() {
    gulp.src('./js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

//合并压缩CSS
gulp.task('minifycss', function() {    
     gulp.src('./css/*.css')      //压缩的文件    
    .pipe(concat('all.css'))    
    .pipe(gulp.dest('./dist'))   //输出文件夹  
    .pipe(rename('all.min.css'))      
    .pipe(minifycss());   //执行压缩
}); 


// 默认任务  
    gulp.task('default', function(){
    gulp.run(/*'lint', 'sass', */'scripts','minifycss');

    // 监听文件变化
    gulp.watch('./js/*.js', function(){
        gulp.run(/*'lint', 'sass',*/ 'scripts');
    });

    gulp.watch('./css/*.css', function(){
        gulp.run(/*'lint', 'sass',*/ 'minifycss');
    });
});