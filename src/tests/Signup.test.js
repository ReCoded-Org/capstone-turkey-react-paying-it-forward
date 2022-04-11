import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Signup from '../components/Signup';


describe('Signup', () => {
  it('matches', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Signup />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
