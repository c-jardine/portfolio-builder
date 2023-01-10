import { Container, Heading, Stack } from '@chakra-ui/react';
import { ContactInfoSection, EducationSection } from '../../components';
import { ResumeType } from '../../studio/types';

type ResumeLayoutProps = ResumeType;

const ResumeLayout = (props: ResumeLayoutProps) => {
  console.log(props.education);
  return (
    <Container maxW="3xl" w="full">
      <Stack spacing={8}>
        <Stack>
          <Heading as="h1">{props.name}</Heading>
          <ContactInfoSection {...props.contactInfo} />
        </Stack>
        <EducationSection data={props.education} />
      </Stack>
    </Container>
  );
};
export default ResumeLayout;
