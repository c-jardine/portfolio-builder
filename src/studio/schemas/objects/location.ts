import { defineType } from 'sanity';
import { states } from '../lists';

type ParentType = { parent?: { customLocation: boolean } };

const Location = defineType({
  title: 'Location',
  name: 'location',
  type: 'object',
  fieldsets: [{ title: 'Location', name: 'location', options: { columns: 2 } }],
  fields: [
    {
      title: 'Custom Location',
      description: 'Select to manually enter a location.',
      name: 'customLocation',
      type: 'boolean',
      options: { layout: 'checkbox' },
      initialValue: false,
    },
    {
      title: 'City',
      name: 'city',
      type: 'string',
      hidden: ({ parent }: ParentType) => !!parent?.customLocation,
      fieldset: 'location',
    },
    {
      title: 'State',
      name: 'state',
      type: 'string',
      hidden: ({ parent }: ParentType) => !!parent?.customLocation,
      fieldset: 'location',
      options: {
        list: states,
      },
    },
    {
      name: 'location',
      description: "Examples: 'Online' or 'Delhi, India",
      type: 'string',
      hidden: ({ parent }: ParentType) => !parent?.customLocation,
    },
  ],
});

export default Location;
