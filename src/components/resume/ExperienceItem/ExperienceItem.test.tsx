import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ExperienceType } from '../../../studio/types';
import { formatDateRange } from '../../../utils';
import ExperienceItem from './ExperienceItem';

const defaultProps: ExperienceType = {
  _type: 'experience',
  companyName: 'Test Company',
  position: 'Tester',
  dates: {
    _type: 'dateRange',
    present: true,
    from: {
      _type: 'myDate',
      month: 'jan',
      year: '2015',
    },
    to: {
      _type: 'myDate',
      month: 'jul',
      year: '2019',
    },
  },
  bullets: ['Test item 1', 'Test item 2', 'Test item 3'],
};

describe('ExperienceItem', () => {
  it('renders an experience item', () => {
    render(<ExperienceItem {...defaultProps} />);
    // Shows company
    expect(screen.getByRole('heading')).toHaveTextContent(
      defaultProps.companyName
    );

    // Shows position
    expect(screen.getByText(defaultProps.position)).toBeTruthy();

    // Shows formatted date
    const formattedDate = formatDateRange(defaultProps.dates);
    expect(screen.getByText(formattedDate)).toBeTruthy();

    // Shows bullet list
    expect(screen.getByRole('list').children.length).toBe(3);
  });
});
