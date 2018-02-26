import React, { Component } from 'react';
import PropTypes            from 'prop-types';
import { Provider }         from 'react-redux';
import QuestionsDashboard   from './QuestionsDashboard';

class App extends Component {

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <QuestionsDashboard />
      </Provider>
    );
  }
}

App.propTypes = {
  store: PropTypes.object.isRequired
};

export default App;
