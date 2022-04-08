import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Navbar from '../components/Navbar';

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
                content.match(/donation for/i)
            );
        }),
    ).toBeInTheDocument();
    expect(
        screen.getByText((content, element) => {
            return (
                element.tagName.toLowerCase() === 'span' &&
                content.match(/request for/i)
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

    expect(screen.queryByText(/donation for/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/request for/i)).not.toBeInTheDocument();
});

test('Links in the Navbar', () => {
    render(
        <BrowserRouter history={history}>
            <Navbar isLogin />
        </BrowserRouter>,
    );

    userEvent.click(screen.queryAllByText(/about us/i)[0]);
    expect(window.location.pathname).toEqual('/about-us');

    userEvent.click(screen.queryAllByText(/how it works?/i)[0]);
    expect(window.location.pathname).toEqual('/how-it-works');



    userEvent.click(screen.queryAllByText(/logout/i)[0]);
    expect(window.location.pathname).toEqual('/logout');
});
