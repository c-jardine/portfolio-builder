import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import { SkillsSectionType } from '../../../studio/types';

type SkillsItemProps = SkillsSectionType;

const SkillsItem = (props: SkillsItemProps) => {
  return (
    <Stack id="skills-item">
      {props.label && (
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Heading as="h3" fontSize="md" mt="3px">
            {props.label}
          </Heading>
          <Box role="list">
            {props.skills.map((skill, index) =>
              index < props.skills.length - 1 ? (
                <Text role="listitem" key={index}>
                  {skill},{' '}
                </Text>
              ) : (
                <Text role="listitem" key={index}>
                  {skill}
                </Text>
              )
            )}
          </Box>
        </Stack>
      )}
    </Stack>
  );
};
export default SkillsItem;
