import { Heading, Stack, Text } from '@chakra-ui/react';
import { EducationType } from '../../../studio/types';
import { formatDateRange } from '../../../utils';

type EducationItemProps = EducationType;

const EducationItem = (props: EducationItemProps) => {
  const date = formatDateRange(props.attended);

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
        <Text>{date}</Text>
      </Stack>
    </Stack>
  );
};
export default EducationItem;
