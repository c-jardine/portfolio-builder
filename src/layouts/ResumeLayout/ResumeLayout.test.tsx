import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ResumeType } from '../../studio/types';
import ResumeLayout from './ResumeLayout';

const defaultProps: ResumeType = {
  _type: 'resume',
  name: 'Test User',
  contactInfo: {
    _type: 'contactInfo',
    email: 'test@testing.com',
  },
};

describe('ResumeLayout', () => {
  it('renders the name in a heading', () => {
    const { container } = render(<ResumeLayout {...defaultProps} />);
    expect(screen.getByRole('heading')).toHaveTextContent('Test User');

    const contactInfo = container.querySelector('#contact-info');
    expect(contactInfo.children.length).toBe(1);
  });
});
