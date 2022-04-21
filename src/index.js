import React from 'react';
import ReactDOM from 'react-dom';
import 'tw-elements';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store';

import Footer from './components/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Footer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
