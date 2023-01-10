import { defineType } from 'sanity';

type ParentType = { parent?: { present: boolean } };

const DateRange = defineType({
  title: 'Dates',
  name: 'dateRange',
  type: 'object',
  fields: [
    {
      title: 'From',
      name: 'from',
      type: 'myDate',
    },
    {
      title: 'Present',
      name: 'present',
      type: 'boolean',
      options: { layout: 'checkbox' },
      initialValue: false,
    },
    {
      title: 'To',
      name: 'to',
      type: 'myDate',
      hidden: ({ parent }: ParentType) => !!parent?.present,
    },
  ],
});

export default DateRange;
