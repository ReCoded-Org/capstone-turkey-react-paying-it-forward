import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Login from '../Login';
import store from '../../../store';

describe('Login Component', () => {
  it('matches', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Login />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
