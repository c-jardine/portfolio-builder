import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { EducationType } from '../../../studio/types';
import { formatDateRange, formatLocation } from '../../../utils';
import EducationItem from './EducationItem';

const defaultProps: EducationType = {
  _type: 'education',
  institution: 'Testing University',
  degreeType: 'BS',
  major: 'Computer Science',
  location: {
    _type: 'location',
    customLocation: true,
    location: 'Mumbai, India',
  },
  attended: {
    _type: 'dateRange',
    present: false,
    from: {
      _type: 'myDate',
      month: 'April',
      year: '2016',
    },
    to: {
      _type: 'myDate',
      month: 'June',
      year: '2020',
    },
  },
};

describe('EducationItem', () => {
  it('renders an education item', () => {
    render(<EducationItem {...defaultProps} />);
    // Shows institution
    expect(screen.getByRole('heading')).toHaveTextContent(
      defaultProps.institution
    );

    // Shows degree
    const formattedDegree = `${defaultProps.degreeType}, ${defaultProps.major}`;
    expect(screen.getByText(formattedDegree)).toBeTruthy();

    // Shows formatted date
    const formattedDate = formatDateRange(defaultProps.attended);
    expect(screen.getByText(formattedDate)).toBeTruthy();

    // Shows location
    const formattedLocation = formatLocation(defaultProps.location);
    expect(screen.getByText(formattedLocation)).toBeTruthy();
  });
});
