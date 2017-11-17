import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducers/index';
import { Provider } from "react-redux";

import Thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    reducer, 
    {},
    composeEnhancers(applyMiddleware(Thunk))
);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
	        <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
