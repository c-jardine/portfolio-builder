import { DateRangeType, LocationType } from '../util';

export type EducationType = {
  _type: 'education';
  attended?: DateRangeType;
  degreeType: string;
  details?: string;
  institution: string;
  location?: LocationType;
  major: string;
  minor?: string;
};
