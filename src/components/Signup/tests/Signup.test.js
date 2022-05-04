import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Signup from '../Signup';
import store from '../../../store';

describe('Signup', () => {
  it('matches', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Signup />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
