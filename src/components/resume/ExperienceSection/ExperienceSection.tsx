import { Stack } from '@chakra-ui/react';
import { ExperienceType } from '../../../studio/types';
import { ExperienceItem } from '../ExperienceItem';
import { SectionHeading } from '../SectionHeading';

type ExperienceSectionProps = { data: [ExperienceType & { _key: string }] };

/**
 * Main experience section.
 */
const ExperienceSection = (props: ExperienceSectionProps) => {
  return (
    <Stack>
      <SectionHeading>Experience</SectionHeading>
      <Stack spacing={4}>
        {props.data.map((item) => (
          <ExperienceItem key={item._key} {...item} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ExperienceSection;
