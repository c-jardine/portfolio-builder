import { resume } from './documents';
import {
  address,
  dateRange,
  education,
  experience,
  location,
  monthYear,
} from './objects';

const Documents = [resume];

const Objects = [
  address,
  dateRange,
  education,
  experience,
  location,
  monthYear,
];

export const schemaTypes = [...Documents, ...Objects];
