import { Heading, Stack, Text } from '@chakra-ui/react';
import { ExperienceType } from '../../../studio/types';
import { formatDateRange } from '../../../utils';
import formatLocation from '../../../utils/location';
import { BulletPointSection } from '../BulletPointSection';

type ExperienceItemProps = ExperienceType;

/**
 * Main experience item.
 */
const ExperienceItem = (props: ExperienceItemProps) => {
  const date = formatDateRange(props.dates);
  const location = formatLocation(props.location);

  return (
    <Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
      >
        <Heading as="h3" fontSize="lg">
          {props.companyName}
        </Heading>
        {props.location && <Text>{location}</Text>}
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent={{ md: 'space-between' }}
      >
        <Text order={{ base: 2, md: 1 }}>{props.position}</Text>
        <Text order={{ base: 1, md: 2 }}>{date}</Text>
      </Stack>
      <BulletPointSection data={props.bullets} />
    </Stack>
  );
};
export default ExperienceItem;
