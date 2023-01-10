import { DateRangeType, LocationType } from '../util';

export type ExperienceType = {
  _type: 'experience';
  bullets: string[];
  companyName: string;
  dates?: DateRangeType;
  location?: LocationType;
  position: string;
};
