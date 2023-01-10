import { defineType } from 'sanity';

const ContactInfo = defineType({
  title: 'Contact Info',
  name: 'contactInfo',
  type: 'object',
  options: { columns: 2 },
  fields: [
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Phone Number',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'LinkedIn',
      name: 'linkedin',
      type: 'string',
    },
    {
      title: 'GitHub',
      name: 'github',
      type: 'string',
    },
  ],
});

export default ContactInfo;
