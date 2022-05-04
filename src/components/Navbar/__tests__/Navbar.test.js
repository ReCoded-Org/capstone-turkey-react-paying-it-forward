import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import Navbar from '../Navbar';

test('Check Navbar in login status', () => {
  render(
    <BrowserRouter>
      <Navbar isLogin />
    </BrowserRouter>,
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
    <BrowserRouter>
      <Navbar isLogin={false} />
    </BrowserRouter>,
  );

  expect(screen.queryByText(/donationFor/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/requestFor/i)).not.toBeInTheDocument();
});

test('Links in the Navbar', () => {
  render(
    <BrowserRouter>
      <Navbar isLogin />
    </BrowserRouter>,
  );

  userEvent.click(screen.queryAllByText(/aboutUs/i)[0]);
  expect(window.location.pathname).toEqual('/about-us');

  userEvent.click(screen.queryAllByText(/howItWorks?/i)[0]);
  expect(window.location.pathname).toEqual('/how-it-works');

});
