import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../Login';

describe('Login Component', () => {
  it('matches', () => {
    const tree = renderer
      .create(
        <Router>
          <Login />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
