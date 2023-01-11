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
      title: 'LinkedIn Username',
      description: 'https://www.linkedin.com/in/{username}',
      name: 'linkedin',
      type: 'string',
    },
    {
      title: 'GitHub Username',
      description: 'https://www.github.com/{username}',
      name: 'github',
      type: 'string',
    },
  ],
});

export default ContactInfo;
