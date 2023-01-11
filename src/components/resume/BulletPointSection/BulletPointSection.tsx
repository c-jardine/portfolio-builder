import { Stack } from '@chakra-ui/react';
import { BulletPointItem } from '../BulletPointItem';

type BulletPointSectionProps = {
  data: string[];
};

/**
 * Main bullet point section.
 */
const BulletPointSection = (props: BulletPointSectionProps) => {
  return (
    <Stack role="list" pl={4}>
      {props.data.map((item) => (
        <BulletPointItem key={item} data={item} />
      ))}
    </Stack>
  );
};
export default BulletPointSection;
