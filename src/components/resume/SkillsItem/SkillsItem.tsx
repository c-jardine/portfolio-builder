import { Heading, Stack, Text } from '@chakra-ui/react';
import { SkillsSectionType } from '../../../studio/types';
import { inlineListSeparator, Separator } from '../../../utils';

type SkillsItemProps = SkillsSectionType;

/**
 * Main skills item.
 */
const SkillsItem = (props: SkillsItemProps) => {
  const skills = inlineListSeparator(props.skills, Separator.COMMA);
  return (
    <Stack id="skills-item">
      <Stack direction={{ base: 'column', md: 'row' }}>
        {props.label && (
          <Heading as="h3" fontSize="md" mt="3px">
            {props.label}
          </Heading>
        )}
        <Text>{skills}</Text>
      </Stack>
    </Stack>
  );
};
export default SkillsItem;
