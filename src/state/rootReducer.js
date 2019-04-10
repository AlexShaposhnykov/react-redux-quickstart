/* eslint no-param-reassign: 0 */

import { combineReducers } from 'redux';

const test = (state = {}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    test,
});

export default rootReducer;
