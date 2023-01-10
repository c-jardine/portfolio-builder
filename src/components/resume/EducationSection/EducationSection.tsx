import { Stack } from '@chakra-ui/react';
import { EducationType } from '../../../studio/types';
import { EducationItem } from '../EducationItem';
import { SectionHeading } from '../SectionHeading';

type EducationSectionProps = { data: [EducationType & { _key: string }] };

const EducationSection = (props: EducationSectionProps) => {
  return (
    <Stack>
      <SectionHeading>Education</SectionHeading>
      <Stack spacing={4}>
        {props.data.map((item) => (
          <EducationItem key={item._key} {...item} />
        ))}
      </Stack>
    </Stack>
  );
};
export default EducationSection;
