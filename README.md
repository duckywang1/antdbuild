关于React全家桶搭建

搭建 React 全家桶也是很头大的事情。React / React-Router / Redux 很长的方法名变量名实在不好记忆。所以写个模板方便使用。

# 搭建 webpack1 antd

// react 一套技术栈  
npm i react react-dom react-router redux react-redux react-router-redux --save-dev --registry=https://registry.npm.taobao.org
// babel编译  
npm i babel-core babel-loader babel-preset-es2015 babel-preset-stage-0 babel-preset-react babel-polyfill css-loader style-loader --save-dev --registry=https://registry.npm.taobao.org

// 兼容性babel  
npm i babel-plugin-transform-object-assign babel-plugin-add-module-exports babel-plugin-transform-decorators-legacy babel-plugin-transform-object-rest-spread --save-dev --registry=https://registry.npm.taobao.org

// sass 编译  
npm i node-sass sass-loader --save-dev --registry=https://registry.npm.taobao.org

// fetch API 带兼容的  
npm i isomorphic-fetch es6-promise --save-dev --registry=https://registry.npm.taobao.org

// 使用 webpack-lodash 按需打包(lodash一般在nodejs端也要用，安装在dependencies)  
[关于lodash的加载](https://imys.net/20161217/webpack-use-lodash.html)  
npm i lodash --save --registry=https://registry.npm.taobao.org
npm i lodash-webpack-plugin babel-plugin-lodash --save-dev --registry=https://registry.npm.taobao.org

// antd babel-plugin-import 安装  
npm i antd babel-plugin-import --save-dev --registry=https://registry.npm.taobao.org

// 关于 antd 的时间插件，使用的是 moment
npm i moment moment-timezone --save-dev --registry=https://registry.npm.taobao.org

# 搭建 webpack1 antd mobile(基于上述Antd搭建再继续做babel加强)

// 额外兼容性babel(作用是防止变量进入全局)  
npm i babel-plugin-external-helpers babel-plugin-transform-runtime --save-dev --registry=https://registry.npm.taobao.org

// 高清方案
npm i extract-text-webpack-plugin autoprefixer postcss-pxtorem postcss postcss-loader postcss-pxtorem --save-dev --registry=https://registry.npm.taobao.org

// less 编译  
npm i less less-loader --save-dev --registry=https://registry.npm.taobao.org

// antd-mobile babel-plugin-import 安装  
npm i antd-mobile babel-plugin-import --save-dev --registry=https://registry.npm.taobao.org

感谢下面的文章／资源对开发提供了很大的便利。  
## webpack1 DLL打包解决方案

[DLL打包解决方案](https://segmentfault.com/a/1190000006087638)  
[External 优化](https://github.com/youngwind/blog/issues/65)  

## CDN
[BootCDN](http://www.bootcdn.cn)  

## Node源
[淘宝源](http://npm.taobao.org)    

例如:    
npm install --save-dev webpack --registry=https://registry.npm.taobao.org   
