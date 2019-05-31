import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './Reducers';
import { HashRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import Routes from './routes';

ReactDOM.render(
    (
        <Provider store={store}>
            <HashRouter>
                <Routes />
            </HashRouter>
        </Provider>
    ),
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
