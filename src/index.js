import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';
import routes from './routes';

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory} routes={routes}>
            
			<div>
				<h1>Hello react-router</h1>
				<DevTools />
			</div>
		</Router>
    </Provider>,
    document.getElementById('root')
);

