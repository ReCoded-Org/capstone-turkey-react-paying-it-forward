import { render, screen, fireEvent, wait } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../../store';
import Donated from '../Donated';
import { getAvailableItems, getItemsByFilter } from '../donatedSlice';

test('fetch data from API', async () => {
  await store.dispatch(getAvailableItems());
  const { status } = store.getState().donated;

  expect(status).toBe('succeeded');
});

test('date button', async () => {
  await store.dispatch(getAvailableItems());
  const { items } = store.getState().donated;

  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Donated />
      </BrowserRouter>
    </Provider>,
  );

  fireEvent.click(screen.queryByText(/date/i));

  const itemsCard = await screen.findAllByText(items[0].name);
  expect(itemsCard[0]).toBeInTheDocument();

  const divList = await container.querySelectorAll('div.grid > div');

  expect(items[0].name).toBe(divList[0].querySelector('img').alt);
});

test('filter buttons', async () => {
  await store.dispatch(getItemsByFilter('Stationery'));
  const { items } = store.getState().donated;

  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Donated />
      </BrowserRouter>
    </Provider>,
  );

  const divList = await container.querySelectorAll('div.grid > div');

  wait(() => {
    expect(items.filter((e) => e.type === 'Stationery').length).toBe(
      divList.length,
    );
  });
}, 20000);
