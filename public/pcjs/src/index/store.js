import { createStore, applyMiddleware, compose } from 'redux';
import { hashHistory } from 'react-router';
import { routerMiddleware, push } from 'react-router-redux';
import indexReducer from './reducers/index.js';

let buildStore, middleware;
middleware = [routerMiddleware(hashHistory)];
// applyMiddleware和compose 用于增强 createStore 方法
// window.devToolsExtension 是 redux 的 chrome 应用
buildStore = compose(
	applyMiddleware(...middleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
// 一般initialState不传，产生个初始化的 redux store
export default function configureStore(initialState) {
	return buildStore(indexReducer, initialState);
};