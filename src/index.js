import 'core-js/es';
import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import 'styles/common.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import setRefs from 'store/reducers/setRefs'

const rootReducer = combineReducers({
  refs: setRefs
})

const store = createStore(rootReducer)

const Page = (
  <Provider store={store}>
    <HashRouter basename='/'>
      <App />
    </HashRouter>
  </Provider>
);

ReactDOM.render(Page, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
