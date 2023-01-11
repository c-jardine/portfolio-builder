import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SkillsSectionType } from '../../../studio/types';
import SkillsItem from './SkillsItem';

const defaultProps: SkillsSectionType = {
  _type: 'skillsSection',
  label: 'Programming',
  skills: ['Test 1', 'Test 2', 'Test 3'],
};

describe('SkillsItem', () => {
  it('renders a skills item', () => {
    render(<SkillsItem {...defaultProps} />);
    // Shows label
    expect(screen.getByRole('heading')).toHaveTextContent(defaultProps.label);

    // Shows skills list
    expect(screen.getByRole('list').children.length).toBe(3);
  });
});
