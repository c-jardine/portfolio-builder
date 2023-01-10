import { Stack } from '@chakra-ui/react';
import { ContactInfoType } from '../../../studio/types';
import { ContactInfoItem } from '../ContactInfoItem';

type ContactInfoSectionProps = ContactInfoType;

type ContactTypes = keyof ContactInfoType;

/**
 * Main contact info section.
 */
const ContactInfoSection = (props: ContactInfoSectionProps) => {
  return (
    <Stack id="contact-info" direction={{ base: 'column', lg: 'row' }} gap={4}>
      {Object.keys(props).map(
        (item: ContactTypes) =>
          item !== '_type' && (
            <ContactInfoItem key={item} type={item} value={props[item]} />
          )
      )}
    </Stack>
  );
};
export default ContactInfoSection;
