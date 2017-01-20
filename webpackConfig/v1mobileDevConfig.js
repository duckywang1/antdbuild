var path = require('path');
var webpack = require('webpack');
var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');
var pxtorem = require('postcss-pxtorem');

var pluginsObj, pluginsArr;
var antdOptions;

pluginsObj = {};
pluginsArr = [];
// 这个是 依赖的绑定
pluginsObj.dll = new webpack.DllReferencePlugin({
	context: __dirname,
	manifest: require('../public/mobilejs/dllvendor/manifest.json') // 这个路径是相对于 本文件(webpack.config这个)的
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

// 好像是样式
pluginsObj.extractText = new ExtractTextPlugin('[name].css', { allChunks: true }),

// 开发与正式的状态就相差一个 压缩 操作
pluginsArr = [pluginsObj.dll, pluginsObj.lodash, pluginsObj.extractText];

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
		'mobileindex': ['./public/mobilejs/src/index/index.js']
	},
	output: {
		path: './public/mobilejs/dist/',
		filename: '[name].js'
	},
	resolve: {
		modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
		extensions: ['', '.web.js', '.js', '.json'],
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
		'console-polyfill': 'console',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: [
                        "lodash", 
                        "transform-object-assign", 
                        "transform-object-rest-spread", 
                        "transform-decorators-legacy", 
                        "add-module-exports", 
                        ["external-helpers"],
                        ["babel-plugin-transform-runtime", { polyfill: false }],
                        ["transform-runtime", { polyfill: false }],
                        ['import', { libraryName: 'antd-mobile', style: 'css' }] 
                    ]
				}
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
            { 
                test: /\.(jpg|png|svg)$/, 
                loader: "url?limit=8192" 
            },
            { 
                test: /\.less$/i, 
                loader: ExtractTextPlugin.extract('style', 'css!postcss!less') 
            },
            { 
                test: /\.css$/i, 
                loader: ExtractTextPlugin.extract('style', 'css!postcss') 
            }
		]
	},
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions', 'Firefox ESR', '> 1%', 'ie >= 8', 'iOS >= 8', 'Android >= 4'],
        }),
        pxtorem({ rootValue: 100, propWhiteList: [] })
    ],
	plugins: pluginsArr,
	devtool: 'source-map',

};
module.exports = webpackConfig;
