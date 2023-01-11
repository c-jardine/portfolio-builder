import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BulletPointSection from './BulletPointSection';

const defaultProps = {
  data: ['Test item 1', 'Test item 2', 'Test item 3', 'Test item 4'],
};

describe('BulletPointSection', () => {
  it('renders a list of bullet point items', () => {
    render(<BulletPointSection {...defaultProps} />);
    const list = screen.getByRole('list');
    expect(list.children.length).toBe(4);
  });
});
