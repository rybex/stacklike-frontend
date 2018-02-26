import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './containers/App';
import store    from './store';

import 'purecss/build/pure.css';
import './main.css';

ReactDOM.render(
  <App store={store}/>,
  document.getElementById('app')
)
