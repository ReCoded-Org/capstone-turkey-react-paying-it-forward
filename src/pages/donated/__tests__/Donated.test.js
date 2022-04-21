import { render, screen, fireEvent, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../../store';
import Donated from '../Donated';
import { getAvailableItems } from '../donatedSlice';

test('Test fetch data from API', async () => {

    await store.dispatch(getAvailableItems());
    const status = store.getState().donated.status;

    expect(status === "succeeded");

});

test('Test date button', async () => {

    await store.dispatch(getAvailableItems());
    const items = store.getState().donated.items;

    const { container } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Donated />
            </BrowserRouter>
        </Provider>
    );

    fireEvent.click(screen.queryByText(/date/i));

    const itemsCard = await screen.findAllByText(items[0].name);
    expect(itemsCard[0]).toBeInTheDocument();

    const divList = await container.querySelectorAll('div.grid > div');

    expect(items[0].name === divList[0].querySelector("img").alt);

});

test('Test filter buttons', async () => {

    await store.dispatch(getAvailableItems());
    const items = store.getState().donated.items;

    const { container } = render(
        <Provider store={store}>
            <BrowserRouter>
                <Donated />
            </BrowserRouter>
        </Provider>
    );

    fireEvent.click(screen.queryByText(/Stationery/i));

    const divList = await container.querySelectorAll('div.grid > div');

    expect(items.filter(e => e.type === 'Stationery').length === divList.length);

});