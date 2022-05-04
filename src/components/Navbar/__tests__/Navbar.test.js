import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../../store';
import Navbar from '../Navbar';

test('Check Navbar in login status', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar isLogin />
      </BrowserRouter>
    </Provider>,
  );

  expect(
    screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === 'span' &&
        content.match(/donationFor/i)
      );
    }),
  ).toBeInTheDocument();
  expect(
    screen.getByText((content, element) => {
      return (
        element.tagName.toLowerCase() === 'span' && content.match(/requestFor/i)
      );
    }),
  ).toBeInTheDocument();
});

test('Check Navbar in logout status', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar isLogin={false} />
      </BrowserRouter>
    </Provider>,
  );

  expect(screen.queryByText(/donationFor/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/requestFor/i)).not.toBeInTheDocument();
});

test('Links in the Navbar', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Navbar isLogin />
      </BrowserRouter>
    </Provider>,
  );

  userEvent.click(screen.queryAllByText(/aboutUs/i)[0]);
  expect(window.location.pathname).toEqual('/about-us');

  userEvent.click(screen.queryAllByText(/howItWorks?/i)[0]);
  expect(window.location.pathname).toEqual('/how-it-works');
});
