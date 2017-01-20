var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

var pluginsObj, pluginsArr;
var antdOptions;

pluginsObj = {};
pluginsArr = [];
// 这个是 依赖的绑定
pluginsObj.dll = new webpack.DllReferencePlugin({
	context: __dirname,
	manifest: require('../public/pcjs/dllvendor/manifest.json') // 这个路径是相对于 本文件(webpack.config这个)的
});

// 这个是 算法 lodash
pluginsObj.lodash = new LodashModuleReplacementPlugin;
// 这个是 代码的压缩
// pluginsObj.uglify = new webpack.optimize.UglifyJsPlugin({
// 	compress: {
// 		warnings: false
// 	},
// 	except: ['$', 'require'] //排除关键字，不然会把这些都压缩替换
// });

// 这个是 代码的排序输出(不知道干什么,看别人有的)
//pluginsObj.order = new webpack.optimize.OccurrenceOrderPlugin();

// 开发与正式的状态就相差一个 压缩 操作
pluginsArr = [pluginsObj.dll, pluginsObj.lodash];

antdOptions = [
  {
    "libraryName": "antd",
    "libraryDirectory": "lib",   // default: lib
    "style": "css"
  },
  {
    "libraryName": "antd-mobile",
    "libraryDirectory": "component",
  },
];
var webpackConfig = {
	entry: {
		'pcindex': ['./public/pcjs/src/index/index.js']
	},
	output: {
		path: './public/pcjs/dist/',
		filename: '[name].js'
	},
	resolve: {
		//require文件的时候不需要写后缀了，可以自动补全
		extensions: ['', '.js', '.jsx', '.css']
	},
	externals: {
		'$': 'jQuery',
		'react': 'React',
        'react-dom': 'ReactDOM',
		'react-addons-css-transition-group': 'React.addons.CSSTransitionGroup',
		'redux': 'Redux',
		'react-redux': 'ReactRedux',
		'react-router': 'ReactRouter',
		'react-router-redux': 'ReactRouterRedux',
		'babel-polyfill': 'window', // polyfill 直接写 {} 也是可以的
        'es5-shim': 'window',
		'console-polyfill': 'console'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: ["lodash", "transform-object-assign", "transform-object-rest-spread", "transform-decorators-legacy", "add-module-exports", ["import", [{"libraryName": "antd"}]] ]
				}
			},
			{
				test: /\.css$/,
				loaders: "style!css"
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			}
		]
	},
	plugins: pluginsArr,
	devtool: 'source-map',

};
module.exports = webpackConfig;
