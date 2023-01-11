import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import BulletPointItem from './BulletPointItem';

const defaultProps = {
  data: 'This is a test item.',
};

describe('BulletPointItem', () => {
  it('renders a bullet point as a list item', () => {
    render(<BulletPointItem data={defaultProps.data} />);
    expect(screen.getByRole('listitem')).toHaveTextContent(defaultProps.data);
  });
});
