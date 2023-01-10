import { Heading } from '@chakra-ui/react';

type SectionHeadingProps = { children: string };

const SectionHeading = (props: SectionHeadingProps) => {
  return (
    <Heading as="h2" fontSize="2xl" borderBottomWidth={2}>
      {props.children}
    </Heading>
  );
};
export default SectionHeading;
