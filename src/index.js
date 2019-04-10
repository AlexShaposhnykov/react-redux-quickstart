/* eslint no-underscore-dangle: 0 */

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from 'state/rootReducer';

import Root from 'containers/Root';

import routes from './routes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk)),
);

const configuredApp = <Root store={store} routes={routes} />;

ReactDOM.render(configuredApp, document.getElementById('root'));
