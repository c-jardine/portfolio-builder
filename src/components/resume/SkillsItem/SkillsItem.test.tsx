import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SkillsSectionType } from '../../../studio/types';
import { inlineListSeparator, Separator } from '../../../utils';
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
    const inlinedSkills = inlineListSeparator(
      defaultProps.skills,
      Separator.COMMA
    );
    expect(screen.getByText(inlinedSkills)).toBeTruthy();
  });
});
