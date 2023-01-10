import { defineType } from 'sanity';

const Experience = defineType({
  title: 'Experience',
  name: 'experience',
  type: 'object',
  fieldsets: [
    {
      title: 'Company Details',
      name: 'companyDetails',
      options: { collapsible: true },
    },
    {
      title: 'Dates Attended',
      name: 'dates',
      options: { collapsible: true },
    },
  ],
  fields: [
    {
      title: 'Company Name',
      name: 'companyName',
      type: 'string',
      fieldset: 'companyDetails',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Position',
      name: 'position',
      type: 'string',
      fieldset: 'companyDetails',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Company Location',
      name: 'location',
      type: 'location',
      fieldset: 'companyDetails',
    },
    {
      title: 'Dates',
      name: 'dates',
      type: 'dateRange',
      fieldset: 'dates',
    },
    {
      title: 'Achievements and Duties',
      name: 'bullets',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
});

export default Experience;
