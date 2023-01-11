import { resume } from './documents';
import {
  address,
  contactInfo,
  dateRange,
  education,
  experience,
  location,
  monthYear,
  skillsSection,
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
  skillsSection,
];

export const schemaTypes = [...Documents, ...Objects];
