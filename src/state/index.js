/* eslint no-underscore-dangle: 0 */
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || (() => noop => noop);

export default function configureStore(initialState = {}) {
    const middlewares = [thunk];

    const enhancers = [
        applyMiddleware(...middlewares),
        reduxDevtools(),
    ];

    const store = createStore(
        rootReducer,
        initialState,
        compose(...enhancers),
    );

    return store;
}
