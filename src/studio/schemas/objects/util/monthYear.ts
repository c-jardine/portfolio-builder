import { defineType } from 'sanity';
import { months } from '../../lists';

const MonthYear = defineType({
  title: 'Date',
  name: 'myDate',
  type: 'object',
  options: { columns: 2, collapsible: false },
  fields: [
    {
      title: 'Month',
      name: 'month',
      type: 'string',
      options: {
        list: months,
      },
    },
    {
      title: 'Year',
      name: 'year',
      type: 'string',
      validation: (Rule) => [
        Rule.min(4).max(4).error('Must be 4 digits'),
        Rule.regex(new RegExp('\\d\\d\\d\\d')).error(
          'Must be a valid year. Ex: 2007'
        ),
      ],
    },
  ],
});

export default MonthYear;
