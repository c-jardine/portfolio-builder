import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SectionHeading from './SectionHeading';

const defaultTitle = 'Test Title';

describe('SectionHeading', () => {
  it('renders a heading', () => {
    render(<SectionHeading>{defaultTitle}</SectionHeading>);
    expect(screen.getByRole('heading')).toHaveTextContent(defaultTitle);
  });
});
