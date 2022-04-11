import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Login from '../components/Login';


describe('Login', () => {
  it('matches', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Login />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
