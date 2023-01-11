import { Stack } from '@chakra-ui/react';
import { SkillsSectionType } from '../../../studio/types';
import { SectionHeading } from '../SectionHeading';
import { SkillsItem } from '../SkillsItem';

type SkillsSectionProps = { data: SkillsSectionType[] };

const SkillsSection = (props: SkillsSectionProps) => {
  return (
    <Stack>
      <SectionHeading>Skills</SectionHeading>
      <Stack id="skills-section" spacing={4}>
        {props.data.map((item) => (
          <SkillsItem key={item._key} {...item} />
        ))}
      </Stack>
    </Stack>
  );
};
export default SkillsSection;
