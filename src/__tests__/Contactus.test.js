import { render, screen, fireEvent, wait } from '@testing-library/react';
import Contactus from '../containers/Contactus';

beforeEach(() => {
  render(<Contactus />);
});

test('Check entering in the inputs fields', async () => {
  // fireEvent.change(screen.queryByLabelText(/full name/i), {
  //     target: { value: '' }
  // });
  await wait(() => {
    fireEvent.click(screen.queryByText(/send message/i));
  });

  expect(screen.getByText(/name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/email is required/i)).toBeInTheDocument();
  expect(screen.getByText(/bodys Message is required/i)).toBeInTheDocument();

  await wait(() => {
    fireEvent.change(screen.queryByLabelText(/full name/i), {
      target: { value: 'Ahmed' },
    });
    fireEvent.change(screen.queryByLabelText(/email/i), {
      target: { value: 'ahmed' },
    });
    fireEvent.change(screen.queryByLabelText(/message/i), {
      target: { value: 'Hello, World' },
    });
  });

  expect(screen.getByText(/invalid email address format/i)).toBeInTheDocument();

  await wait(() => {
    fireEvent.change(screen.queryByLabelText(/full name/i), {
      target: { value: 'Ahmed' },
    });
    fireEvent.change(screen.queryByLabelText(/email/i), {
      target: { value: 'ahmed@example.com' },
    });
    fireEvent.change(screen.queryByLabelText(/message/i), {
      target: { value: 'Hello, World' },
    });
    fireEvent.click(screen.queryByText(/send message/i));
  });

  expect(screen.queryByLabelText(/full name/i).value).toBe('Ahmed');
  expect(screen.queryByLabelText(/email/i).value).toBe('ahmed@example.com');
  expect(screen.queryByLabelText(/message/i).value).toBe('Hello, World');
});
