import { Heading, Stack, Text } from '@chakra-ui/react';
import { EducationType } from '../../../studio/types';
import { formatDateRange, formatLocation } from '../../../utils';

type EducationItemProps = EducationType;

/**
 * Main education item.
 */
const EducationItem = (props: EducationItemProps) => {
  const date = formatDateRange(props.attended);
  const location = formatLocation(props.location);

  return (
    <Stack id="education-item">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
      >
        <Heading as="h3" fontSize="lg">
          {props.institution}
        </Heading>
        {props.location && <Text>{location}</Text>}
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
      >
        <Text order={{ base: 2, md: 1 }}>
          {props.degreeType}, {props.major}
        </Text>
        <Text order={{ base: 1, md: 2 }}>{date}</Text>
      </Stack>
      {props.minor && <Text>Minor: {props.minor}</Text>}
      {props.details && <Text>{props.details}</Text>}
    </Stack>
  );
};
export default EducationItem;
