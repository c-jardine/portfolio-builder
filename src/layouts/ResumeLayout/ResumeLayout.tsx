import { Container, Heading } from '@chakra-ui/react';
import { ContactInfoSection } from '../../components';
import { ResumeType } from '../../studio/types';

type ResumeLayoutProps = ResumeType;

const ResumeLayout = (props: ResumeLayoutProps) => {
  return (
    <Container maxW="7xl" w="full">
      <Heading as="h1">{props.name}</Heading>
      <ContactInfoSection {...props.contactInfo} />
    </Container>
  );
};
export default ResumeLayout;
