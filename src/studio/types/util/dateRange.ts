import { MonthYearType } from './monthYear';

export type DateRangeType = {
  _type: 'dateRange';
  from?: MonthYearType;
  to?: MonthYearType;
  present: boolean;
};
