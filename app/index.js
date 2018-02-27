import React              from 'react';
import ReactDOM           from 'react-dom';
import { Provider }       from 'react-redux';
import store              from './store';
import QuestionsDashboard from './containers/QuestionsDashboard';

import 'skeleton-css/css/skeleton.css';
import 'skeleton-css/css/normalize.css';

ReactDOM.render(
  <Provider store={store}>
    <QuestionsDashboard/>
  </Provider>,
  document.getElementById('app')
)
