1.   npm install -g gulp 
确保安装过全局GULP

2.   npm install --save-dev gulp
	
这里，我们使用 —-save-dev 来更新package.json文件，更新 devDependencies 值，以表明项目需要依赖gulp。
Dependencies 可以向其他参与项目的人指明项目在开发环境和生产环境中的node模块依懒关系

3.   新建gulpfile.js在根目录 （查看此文件的详细配置）

4.  npm install gulp-minify-css gulp-jshint gulp-sass gulp-concat gulp-uglify gulp-rename --save-dev 
安装依赖


5.