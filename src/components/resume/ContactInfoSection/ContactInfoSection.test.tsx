import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ContactInfoType } from '../../../studio/types';
import ContactInfoSection from './ContactInfoSection';

describe('ContactInfoSection', () => {
  it('renders all provided contact methods', () => {
    const defaultProps: ContactInfoType = {
      _type: 'contactInfo',
      email: 'test@testing.com',
      phone: '(555) 123-4567',
      linkedin: 'linkedin.com/in/test-123-keplux',
      github: 'github.com/test-123-keplux',
    };

    const { container } = render(<ContactInfoSection {...defaultProps} />);
    const section = container.querySelector('#contact-info');
    expect(section.children.length).toBe(4);
  });

  it('only renders entered contact types', () => {
    const defaultProps: ContactInfoType = {
      _type: 'contactInfo',
      email: 'test@testing.com',
      phone: '(555) 123-4567',
    };

    const { container } = render(<ContactInfoSection {...defaultProps} />);
    const section = container.querySelector('#contact-info');
    expect(section.children.length).toBe(2);
  });

  it("doesn't crash when no contact types are entered", () => {
    const defaultProps: ContactInfoType = {
      _type: 'contactInfo',
    };

    const { container } = render(<ContactInfoSection {...defaultProps} />);
    const section = container.querySelector('#contact-info');
    expect(section.children.length).toBe(0);
  });
});
