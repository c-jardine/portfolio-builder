import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { SkillsSectionType } from '../../../studio/types';
import SkillsSection from './SkillsSection';

const defaultProps: SkillsSectionType[] = [
  {
    _key: 'key1234',
    _type: 'skillsSection',
    label: 'Programming',
    skills: ['Test 1', 'Test 2', 'Test 3'],
  },
  {
    _key: 'key5678',
    _type: 'skillsSection',
    label: 'Software',
    skills: ['Test 4', 'Test 5', 'Test 6'],
  },
];

describe('SkillsSection', () => {
  it('renders the skills section', () => {
    const { container } = render(<SkillsSection data={defaultProps} />);
    // Shows section title
    expect(container.querySelector('h2')).toHaveTextContent('Skills');

    // Shows skills sections
    expect(container.querySelector('#skills-section').children.length).toBe(2);
  });
});
