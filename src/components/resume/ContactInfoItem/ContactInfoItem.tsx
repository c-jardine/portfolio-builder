import { Stack, StackDivider, Text } from '@chakra-ui/react';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa';

type ContactInfoProps = {
  type: string;
  value: string;
};

type ContactInfoIconProps = Pick<ContactInfoProps, 'type'>;

/**
 * Generate an icon matching the contact type.
 */
const ContactInfoIcon = (props: ContactInfoIconProps) => {
  const icon = () => {
    switch (props.type) {
      case 'email':
        return FaEnvelope;
      case 'phone':
        return FaPhone;
      case 'github':
        return FaGithub;
      case 'linkedin':
        return FaLinkedinIn;
    }
  };

  return React.createElement(icon(), {
    'aria-label': `Contact through ${props.type}`,
  });
};

/**
 * Main contact info item.
 */
const ContactInfoItem = (props: ContactInfoProps) => {
  return (
    <Stack
      divider={<StackDivider />}
      alignItems="center"
      w="max"
      p={2}
      borderWidth={1}
      borderRadius="lg"
    >
      <ContactInfoIcon type={props.type} />
      <Text px={2} fontSize="sm">
        {props.value}
      </Text>
    </Stack>
  );
};
export default ContactInfoItem;
