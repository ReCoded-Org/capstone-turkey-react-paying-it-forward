import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'tw-elements';

import './index.css';
import App from './App';
/*  eslint-disable no-unused-vars */
import * as serviceWorker from './serviceWorker';
import store from './store';
import "./i18n";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
