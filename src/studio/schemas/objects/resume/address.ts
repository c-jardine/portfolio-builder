import { defineType } from 'sanity';

const Address = defineType({
  title: 'Address',
  name: 'address',
  type: 'object',
  options: { columns: 2 },
  fields: [
    {
      title: 'Address Line 1',
      name: 'addressLine1',
      type: 'string',
    },
    {
      title: 'Address Line 2',
      name: 'addressLine2',
      type: 'string',
    },
    {
      title: 'City',
      name: 'city',
      type: 'string',
    },
    {
      title: 'State',
      name: 'state',
      type: 'string',
    },
    {
      title: 'Zip',
      name: 'zip',
      type: 'string',
    },
  ],
});

export default Address;
