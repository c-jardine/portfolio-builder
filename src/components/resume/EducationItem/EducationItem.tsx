import { Heading, Stack, Text } from '@chakra-ui/react';
import { EducationType } from '../../../studio/types';

type EducationItemProps = EducationType;

const EducationItem = (props: EducationItemProps) => {
  return (
    <Stack>
      <Heading as="h3" fontSize="lg">
        {props.institution}
      </Heading>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
      >
        <Text>
          {props.degreeType}, {props.major}
        </Text>
        <Text>
          {props.attended.from.month} {props.attended.from.year} -{' '}
          {props.attended.present
            ? 'present'
            : `${props.attended.to.month} ${props.attended.to.year}`}
        </Text>
      </Stack>
    </Stack>
  );
};
export default EducationItem;
