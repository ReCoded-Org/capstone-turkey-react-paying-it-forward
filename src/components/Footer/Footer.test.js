import { BrowserRouter } from 'react-router-dom';
import { render, screen, fireEvent, wait } from '@testing-library/react';

import Footer from './Footer';
import SubscriptionForm from './SubscriptionForm';

describe('<Footer />', () => {
  test('Subscription field', () => {
    render(<Footer />);

    const subElement = screen.getByTestId('subscription');
    expect(subElement).toBeInTheDocument();
    expect(subElement).toHaveAttribute('type', 'email');
    const subElementButton = screen.getByTestId('subscriptionButton');
    expect(subElementButton).toBeInTheDocument();
  });
});

describe('Pass valid email to email input field', () => {
  test('subscription field', async () => {
    render(<SubscriptionForm />);

    await wait(() => {
      fireEvent.change(screen.getByTestId('subscription'), {
        target: { value: 'test@test' },
      });
      fireEvent.click(screen.getByTestId('subscriptionButton'));
    });
    expect(screen.getByTestId('error')).toBeInTheDocument();

    await wait(() => {
      fireEvent.change(screen.getByTestId('subscription'), {
        target: { value: 'test@test.tr' },
      });
      fireEvent.click(screen.getByTestId('subscriptionButton'));
    });

    expect(() => screen.getByText('Please add an valid email')).toThrow(
      'Unable to find an element',
    );
    expect(() => screen.getByText('Required')).toThrow(
      'Unable to find an element',
    );
  });

  test('Links in the Footer', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );

    expect(screen.getByText('items')).toHaveAttribute('href', '/items');
    expect(screen.getByText('donators')).toHaveAttribute('href', '/donators');
    expect(screen.getByText('pricing')).toHaveAttribute('href', '/pricing');
    expect(screen.getByText('aboutUs')).toHaveAttribute('href', '/about-us');
    expect(screen.getByText('QA')).toHaveAttribute('href', '/qa');

    expect(screen.getByText('Kutay Kağan Özen')).toHaveAttribute(
      'href',
      'https://github.com/Iseluin',
    );
    expect(screen.getByText('Abuobaida Abdi')).toHaveAttribute(
      'href',
      'https://github.com/androidmini9x',
    );
    expect(screen.getByText('Göksu Alkan')).toHaveAttribute(
      'href',
      'https://github.com/goksu1',
    );
    expect(screen.getByText('Mustafa Durmaz')).toHaveAttribute(
      'href',
      'https://github.com/mustafadurmaz',
    );
    expect(screen.getByText('Khadija Hawa')).toHaveAttribute(
      'href',
      'https://github.com/khadijahawa',
    );
    expect(screen.getByText('Şebnem Görmüş')).toHaveAttribute(
      'href',
      'https://github.com/sebnemgormus',
    );
  });
});
