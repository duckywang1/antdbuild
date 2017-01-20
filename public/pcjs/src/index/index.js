//import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer, push } from 'react-router-redux';
// fetch
require('es6-promise').polyfill();
require('isomorphic-fetch');

/*==========关于antd时间插件的时间设置==========*/
import moment from 'moment-timezone/moment-timezone';
// 推荐在入口文件全局设置 locale 与时区
import 'moment/locale/zh-cn';
moment.locale('zh-cn');
// 从 https://github.com/moment/moment-timezone/blob/develop/data/packed/latest.json 复制
moment.tz.add('Asia/Shanghai|CST CDT|-80 -90|01010101010101010|-1c1I0 LX0 16p0 1jz0 1Myp0 Rb0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6');
moment.tz.setDefault('Asia/Shanghai');
/*==========以上是关于antd时间插件的时间设置==========*/

import MainContainer from './containers/MainContainer.js';
import CountContainer from './containers/_CountContainer.js';
import MissionContainer from './containers/_MissionContainer.js';

// 1.新建store 2.把store放到全局  
import configureStore from './store.js';

let store, history;
store = configureStore();
window.reduxstore = store;
history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={MainContainer}>
                <IndexRoute component={CountContainer} />
                <Route path="count" component={CountContainer} />
                <Route path="mission" component={MissionContainer} />
            </Route>
            <Route path="*" component={CountContainer} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
