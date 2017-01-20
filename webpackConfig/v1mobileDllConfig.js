var webpack = require('webpack');
var vendors;

vendors = ['es6-promise', 'isomorphic-fetch'];

var dllConfig = {
    entry: {
        'mobile_vendors': vendors
    },
    output: {
        path: './public/mobilejs/dllvendor',
        filename: '[name].js',
        library: '[name]'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ["transform-object-assign", "transform-object-rest-spread", "transform-decorators-legacy", "add-module-exports"]
                }
            },
            {
                test: /\.css$/,
                loaders: "style!css"
            },
            {
                test: /\.less$/,
                loaders: "style!css!less"
            },
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            path: './public/mobilejs/dllvendor/manifest.json',
            name: '[name]',
            context: __dirname
        })
    ]
};
module.exports = dllConfig;