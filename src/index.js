/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from 'state';

import Root from 'containers/Root';

import routes from './routes';

const store = configureStore({});

ReactDOM.render(
    <Root store={store} routes={routes} />,
    document.getElementById('root'),
);
