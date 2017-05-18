import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Store from 'redux/store';
import App from 'components/App';

import 'sass/app.scss';

const title = 'inference';

ReactDOM.render(
  <Provider store={Store}>
    <App>{title}</App>
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();