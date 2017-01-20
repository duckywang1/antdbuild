import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import common from './common.js';

let indexReducer;
indexReducer = combineReducers({
    // 路由的reducer
	routing: routerReducer,
	redux_common: common,
});
export default indexReducer;