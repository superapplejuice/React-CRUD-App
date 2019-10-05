import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
const RootElement = document.querySelector('#root');

const renderApp = () => {
	return (
		<Provider store={store}>
			<App />
		</Provider>
	);
};

ReactDOM.render(renderApp(), RootElement);
