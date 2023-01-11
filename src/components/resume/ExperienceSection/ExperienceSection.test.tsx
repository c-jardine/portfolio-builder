import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ExperienceType } from '../../../studio/types';
import ExperienceSection from './ExperienceSection';

const defaultProps: ExperienceType[] = [
  {
    _key: 'key1234',
    _type: 'experience',
    companyName: 'Test Company',
    position: 'Tester',
    location: {
      _type: 'location',
      city: 'Toledo',
      state: 'Ohio',
    },
    dates: {
      _type: 'dateRange',
      present: true,
      from: {
        _type: 'myDate',
        month: 'January',
        year: '2019',
      },
    },
    bullets: ['Test item 1', 'Test item 2', 'Test item 3'],
  },
  {
    _key: 'key5678',
    _type: 'experience',
    companyName: 'Test Industries',
    position: 'Developer',
    location: {
      _type: 'location',
      city: 'Sylvania',
      state: 'Ohio',
    },
    dates: {
      _type: 'dateRange',
      present: false,
      from: {
        _type: 'myDate',
        month: 'February',
        year: '2015',
      },
      to: {
        _type: 'myDate',
        month: 'December',
        year: '2019',
      },
    },
    bullets: ['Test item 4', 'Test item 5', 'Test item 6'],
  },
];

describe('ExperienceSection', () => {
  it('renders the experience section', () => {
    const { container } = render(<ExperienceSection data={defaultProps} />);
    // Shows section title
    expect(container.querySelector('h2')).toHaveTextContent('Experience');

    // Shows experience sections
    expect(container.querySelector('#experience-section').children.length).toBe(
      2
    );
  });
});
