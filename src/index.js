import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// At top most component make store available

import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import reducer from './store/reducer';

// (A) [*** --- Applying "Middleware" --- ***] = (B) [ o ----> (catch the action) <---- o ] = (C) [ o--->---> (again pass to the reducer) <---<---o ]

const loginAction = store => {
    return next => {
        return action => {
            // Catching the action
            const result = next(action);
            console.log(`Action is caught ib the middleware ${JSON.stringify(result)}`);
            // Letting the action pass to Reducers
            return result;
        }
    }
}

const store = createStore(reducer,applyMiddleware(loginAction));

ReactDOM.render(
    <Provider store={store}><App/></Provider> ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
