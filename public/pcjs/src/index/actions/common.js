import * as types from '../constants/index.js';

// 增加数量
let common_increase;
// 减少数量
let common_decrease;

/**
 * common_increase 增加数量
 * @param params.num 计算返回的新的数字
 */
common_increase = function(params) {
    return {
        type: types.COMMON_INCREAMENT,
        num: params.num
    };
};

/**
 * common_decrease 减少数量
 * @param params.num 计算返回的新的数字
 */
common_decrease = function(params) {
    return {
        type: types.COMMON_DECREAMENT,
        num: params.num
    };
};

export { common_increase };
export { common_decrease };