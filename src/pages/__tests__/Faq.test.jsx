import { render, screen, cleanup } from '@testing-library/react';
import Faq from '../Faq';

afterEach(() => { cleanup() });

test('should render Faq page', () => {
    render(<Faq />);
    const faqElement = screen.getByTestId('faq-1');
    expect(faqElement).toBeInTheDocument();
    expect(screen.getByText('What is Paying It Forward?')).toBeInTheDocument();

});

describe('snapshot test', () => {
    it('Component with a snapshot', () => {
        const component = '<Faq>'
        expect(component).toMatchSnapshot();
    })
});

jest.mock('module', () => ({
    __esModule: true,
    default: jest.fn()
}));