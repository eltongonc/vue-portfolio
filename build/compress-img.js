const compress_images = require('compress-images')

const inputDir = 'static/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
const outputDir = 'static-compressed/';
 

compress_images(inputDir, outputDir, {compress_force: false, statistic: true, autoupdate: true}, false,
	{jpg: {engine: 'mozjpeg', command: ['-quality', '90']}},
	{png: {engine: 'pngquant', command: ['--quality=80-90']}},
	{svg: {engine: 'svgo', command: '--multipass'}},
	{gif: {engine: 'gifsicle', command: ['--colors', '90', '--use-col=web']}}, function(error, completed, statistic){
	console.log('-------------');
	console.log(error);
	console.log(completed);
	console.log(statistic);
	console.log('-------------');
});