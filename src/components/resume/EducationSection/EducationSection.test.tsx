import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { EducationType } from '../../../studio/types';
import EducationSection from './EducationSection';

const defaultProps: EducationType[] = [
  {
    _key: 'key1234',
    _type: 'education',
    institution: 'Testing University',
    degreeType: 'AS',
    major: 'Computer Information Systems',
    attended: {
      _type: 'dateRange',
      present: false,
      from: {
        _type: 'myDate',
        month: 'January',
        year: '2018',
      },
      to: {
        _type: 'myDate',
        month: 'June',
        year: '2019',
      },
    },
  },
  {
    _key: 'key5678',
    _type: 'education',
    institution: 'React State University',
    degreeType: 'BS',
    major: 'Computer Science',
    attended: {
      _type: 'dateRange',
      present: true,
      from: {
        _type: 'myDate',
        month: 'April',
        year: '2020',
      },
    },
  },
];

describe('EducationSection', () => {
  it('renders the education section', () => {
    const { container } = render(<EducationSection data={defaultProps} />);
    // Shows section title
    expect(container.querySelector('h2')).toHaveTextContent('Education');

    // Shows education sections
    expect(container.querySelector('#education-section').children.length).toBe(
      2
    );
  });
});
