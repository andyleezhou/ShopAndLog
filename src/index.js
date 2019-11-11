import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './reducers/index';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter basename='/ShopAndLog'>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
