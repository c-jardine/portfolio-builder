import { defineType } from 'sanity';

const Resume = defineType({
  title: 'Resume',
  description: 'Build your resume here.',
  name: 'resume',
  type: 'document',
  groups: [
    {
      title: 'Details',
      name: 'details',
    },
    {
      title: 'Education',
      name: 'education',
    },
    {
      title: 'Experience',
      name: 'experience',
    },
    {
      title: 'Skills',
      name: 'skills',
    },
  ],
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      group: 'details',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'address',
      group: 'details',
    },
    {
      title: 'Contact Info',
      name: 'contactInfo',
      type: 'contactInfo',
      group: 'details',
    },
    {
      title: 'Education',
      name: 'education',
      type: 'array',
      of: [{ type: 'education' }],
      group: 'education',
    },
    {
      title: 'Experience',
      name: 'experience',
      type: 'array',
      of: [{ type: 'experience' }],
      group: 'experience',
    },
    {
      title: 'Skills',
      name: 'skills',
      type: 'array',
      of: [{ type: 'skillsSection' }],
    },
  ],
});

export default Resume;
