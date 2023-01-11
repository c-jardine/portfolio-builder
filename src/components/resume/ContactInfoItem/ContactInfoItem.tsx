import { Stack, StackDivider, Text } from '@chakra-ui/react';
import React from 'react';
import { IconType } from 'react-icons';
import { FaEnvelope, FaGithub, FaLinkedinIn, FaPhone } from 'react-icons/fa';
import { Link } from '../../core';

type ContactInfoProps = {
  type: string;
  value: string;
};

type ContactInfoIconProps = Pick<ContactInfoProps, 'type'>;

/**
 * Generate an icon matching the contact type.
 */
const ContactInfoIcon = (props: ContactInfoIconProps) => {
  const icon = (): IconType => {
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
  const getLink = (): string => {
    switch (props.type) {
      case 'email':
        return `mailto:${props.value}`;
      case 'phone':
        return `tel:${props.value}`;
      case 'github':
        return `https://www.github.com/${props.value}`;
      case 'linkedin':
        return `https://www.linkedin.com/in/${props.value}`;
    }
  };
  return (
    <Link href={getLink()} w="full">
      <Stack
        divider={<StackDivider />}
        alignItems="center"
        w="full"
        p={2}
        borderWidth={1}
        borderRadius="lg"
      >
        <ContactInfoIcon type={props.type} />
        <Text px={2} fontSize="sm">
          {props.value}
        </Text>
      </Stack>
    </Link>
  );
};
export default ContactInfoItem;
