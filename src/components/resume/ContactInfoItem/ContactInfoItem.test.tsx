import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ContactInfoItem from './ContactInfoItem';

const defaultProps = [
  {
    type: 'email',
    value: 'test@testing.com',
  },
  {
    type: 'phone',
    value: '(555) 123-4567',
  },
  {
    type: 'linkedin',
    value: 'linkedin.com/in/test-123-keplux',
  },
  {
    type: 'github',
    value: 'github.com/test-123-keplux',
  },
];

describe('ContactInfoItem', () => {
  it('renders a value for valid contact types', () => {
    defaultProps.map((item) => {
      render(<ContactInfoItem {...item} />);
      expect(screen.getByText(item.value)).toBeTruthy();
    });
  });
});
