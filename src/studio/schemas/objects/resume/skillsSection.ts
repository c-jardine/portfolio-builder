import { defineType } from 'sanity';

const SkillsSection = defineType({
  title: 'Skills Section',
  name: 'skillsSection',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
    },
    {
      title: 'Skills',
      name: 'skills',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
});

export default SkillsSection;
