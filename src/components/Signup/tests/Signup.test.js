import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Signup from '../Signup';

describe('Signup', () => {
  it('matches', () => {
    const tree = renderer
      .create(
        <Router>
          <Signup />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
