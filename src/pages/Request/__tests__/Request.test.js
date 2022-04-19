import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../../store';
import Request from '../Request';
import { getRequestItems } from '../requestSlice';


test('Test fetch data from API', async () => {

    await store.dispatch(getRequestItems());
    const status = store.getState().request.status;

    expect(status === "succeeded");

});

test('Test date button', async () => {

    await store.dispatch(getRequestItems());
    const items = store.getState().request.items;

    const { container } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Request />
            </BrowserRouter>
        </Provider>
    );

    fireEvent.click(screen.queryByText(/date/i));

    expect(await screen.findByText(items[0].name)).toBeInTheDocument();

    const divList = await container.querySelectorAll('div.grid > div');

    expect(items[0].name === divList[0].querySelector("img").alt);

});

test('Test filter buttons', async () => {

    await store.dispatch(getRequestItems());
    const items = store.getState().request.items;

    const { container } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Request />
            </BrowserRouter>
        </Provider>
    );

    fireEvent.click(screen.queryByText(/School Books/i));

    const divList = await container.querySelectorAll('div.grid > div');

    expect(items.filter(e => e.type === 'School Books').length === divList.length);

});
