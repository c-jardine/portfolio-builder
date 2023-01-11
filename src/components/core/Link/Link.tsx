import { chakra } from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

const Link = chakra<typeof NextLink, NextLinkProps>(NextLink, {
  // ensure that you're forwarding all of the required props for your case
  shouldForwardProp: (prop) => ['href', 'target', 'children'].includes(prop),
});

export default Link;
