import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import store        from './store';
import AppRoutes    from './routes';

import 'skeleton-css/css/skeleton.css';
import 'skeleton-css/css/normalize.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes/>
  </Provider>,
  document.getElementById('app')
);
