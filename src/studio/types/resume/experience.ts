import { DateRangeType, LocationType } from '../util';

export type ExperienceType = {
  _key?: string;
  _type: 'experience';
  bullets: string[];
  companyName: string;
  dates?: DateRangeType;
  location?: LocationType;
  position: string;
};
