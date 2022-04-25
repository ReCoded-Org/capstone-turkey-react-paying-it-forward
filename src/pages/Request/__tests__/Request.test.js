import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from '../../../store';
import Request from '../Request';
import { getRequestedItems } from '../requestSlice';

test('fetch data from API', async () => {
  await store.dispatch(getRequestedItems());
  const { status } = store.getState().requestedItems;

  expect(status).toBe('succeeded');
});

test('date button', async () => {
  await store.dispatch(getRequestedItems());
  const { items } = store.getState().requestedItems;

  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Request />
      </BrowserRouter>
    </Provider>,
  );

  fireEvent.click(screen.queryByText(/date/i));

  expect(await screen.findByText(items[0].name)).toBeInTheDocument();

  const divList = await container.querySelectorAll('div.grid > div');

  expect(items[0].name === divList[0].querySelector('img').alt);
});

test('filter buttons', async () => {
  await store.dispatch(getRequestedItems());
  const { items } = store.getState().requestedItems;

  const { container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Request />
      </BrowserRouter>
    </Provider>,
  );

  fireEvent.click(screen.queryByText(/School Books/i));

  const divList = await container.querySelectorAll('div.grid > div');

  expect(items.filter((e) => e.type === 'School Books').length).toBe(divList.length);
});
