import React, { Fragment } from 'react';
import { hot } from 'react-hot-loader/root';

import 'assets/utils/normalize.css';
import 'assets/globalStyles.scss';

const App = ({ children }) => (
    <Fragment>
        {children}
    </Fragment>
);

export default hot(App);
