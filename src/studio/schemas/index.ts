import { resume } from './documents';
import {
  address,
  contactInfo,
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
  contactInfo,
];

export const schemaTypes = [...Documents, ...Objects];
