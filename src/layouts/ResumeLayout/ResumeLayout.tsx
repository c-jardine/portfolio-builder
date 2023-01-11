import { Container, Heading, Stack } from '@chakra-ui/react';
import {
  ContactInfoSection,
  EducationSection,
  SkillsSection,
} from '../../components';
import { ExperienceSection } from '../../components/resume/ExperienceSection';
import { ResumeType } from '../../studio/types';

type ResumeLayoutProps = ResumeType;

const ResumeLayout = (props: ResumeLayoutProps) => {
  return (
    <Container maxW="3xl" w="full">
      <Stack spacing={8}>
        <Stack>
          <Heading as="h1">{props.name}</Heading>
          <ContactInfoSection {...props.contactInfo} />
        </Stack>
        <EducationSection data={props.education} />
        <ExperienceSection data={props.experience} />
        <SkillsSection data={props.skills} />
      </Stack>
    </Container>
  );
};
export default ResumeLayout;
