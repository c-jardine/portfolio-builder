import { Stack } from '@chakra-ui/react';
import { ExperienceType } from '../../../studio/types';
import { ExperienceItem } from '../ExperienceItem';
import { SectionHeading } from '../SectionHeading';

type ExperienceSectionProps = { data: ExperienceType[] };

/**
 * Main experience section.
 */
const ExperienceSection = (props: ExperienceSectionProps) => {
  return (
    <Stack>
      <SectionHeading>Experience</SectionHeading>
      <Stack id="experience-section" spacing={4}>
        {props.data.map((item) => (
          <ExperienceItem key={item._key} {...item} />
        ))}
      </Stack>
    </Stack>
  );
};

export default ExperienceSection;
