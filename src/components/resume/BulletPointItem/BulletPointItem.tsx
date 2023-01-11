import { SimpleGrid, Text } from '@chakra-ui/react';

type BulletPointProps = { data: string };

/**
 * Main bullet point item.
 */
const BulletPointItem = (props: BulletPointProps) => {
  return (
    <SimpleGrid role="listitem" templateColumns="auto 100%" gap={2}>
      <Text>&bull;</Text>
      <Text>{props.data}</Text>
    </SimpleGrid>
  );
};
export default BulletPointItem;
