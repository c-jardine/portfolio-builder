import { Stack } from '@chakra-ui/react';
import { EducationType } from '../../../studio/types';
import { EducationItem } from '../EducationItem';
import { SectionHeading } from '../SectionHeading';

type EducationSectionProps = { data: EducationType[] };

/**
 * Main education section.
 */
const EducationSection = (props: EducationSectionProps) => {
  return (
    <Stack>
      <SectionHeading>Education</SectionHeading>
      <Stack id="education-section" spacing={4}>
        {props.data.map((item) => (
          <EducationItem key={item._key} {...item} />
        ))}
      </Stack>
    </Stack>
  );
};
export default EducationSection;
