import { defineType } from 'sanity';

const Education = defineType({
  title: 'Education',
  name: 'education',
  type: 'object',
  fieldsets: [
    {
      title: 'School Details',
      name: 'schoolDetails',
      options: { collapsible: true },
    },
    {
      title: 'Degree',
      name: 'degree',
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
      title: 'Institution',
      name: 'institution',
      type: 'string',
      fieldset: 'schoolDetails',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Institution Location',
      name: 'location',
      type: 'location',
      fieldset: 'schoolDetails',
    },
    {
      title: 'Type',
      description:
        "Examples: 'BS', 'Bachelor of Science', or 'High School Diploma'",
      name: 'degreeType',
      type: 'string',
      fieldset: 'degree',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Major',
      name: 'major',
      type: 'string',
      fieldset: 'degree',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Minor',
      name: 'minor',
      type: 'string',
      fieldset: 'degree',
    },
    {
      title: 'Dates',
      description:
        'If you have been graduated for a while, feel free to just add the year you graduated.',
      name: 'attended',
      type: 'dateRange',
      fieldset: 'dates',
    },
    {
      title: 'Details',
      description: "Example: 'GPA: 3.97. Summa cum laude.'",
      name: 'details',
      type: 'string',
    },
  ],
});

export default Education;
