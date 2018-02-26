import React        from 'react';
import { Provider } from 'react-redux';
import { mount }    from 'enzyme';
import App          from '../../../app/containers/App';

describe('App', () => {
  it('should render all components', () => {
    const container = mount(
      <App />
    );
  });
});
