import { DateRangeType, MonthYearType } from '../../studio/types';
import { formatDate, formatDateRange } from '../formatDateRange';

describe('formatDate', () => {
  const FULL_DATE: MonthYearType = {
    _type: 'myDate',
    month: 'April',
    year: '2008',
  };
  const FULL_DATE_RESULT = 'April 2008';
  const YEAR_ONLY: MonthYearType = {
    _type: 'myDate',
    year: '2008',
  };
  const YEAR_ONLY_RESULT = '2008';
  const NO_DATE: MonthYearType = {
    _type: 'myDate',
  };

  it('returns the month and year if both are entered', () => {
    expect(formatDate(FULL_DATE)).toBe(FULL_DATE_RESULT);
  });

  it('returns the year if only the year is entered', () => {
    expect(formatDate(YEAR_ONLY)).toBe(YEAR_ONLY_RESULT);
  });

  it('returns null if no date is entered', () => {
    expect(formatDate(NO_DATE)).toBeNull();
  });
});

describe('formatDateRange', () => {
  const FROM_VALID_TO_PRESENT: DateRangeType = {
    _type: 'dateRange',
    present: true,
    from: {
      _type: 'myDate',
      month: 'April',
      year: '2009',
    },
  };
  const FROM_VALID_TO_PRESENT_RESULT = 'April 2009 - present';

  const PRESENT_ONLY: DateRangeType = {
    _type: 'dateRange',
    present: true,
  };
  const PRESENT_ONLY_RESULT = 'present';

  const NO_DATE: DateRangeType = {
    _type: 'dateRange',
    present: false,
  };

  it('returns a string with from date to present', () => {
    expect(formatDateRange(FROM_VALID_TO_PRESENT)).toBe(
      FROM_VALID_TO_PRESENT_RESULT
    );
  });

  it('returns a string when only present and no dates', () => {
    expect(formatDateRange(PRESENT_ONLY)).toBe(PRESENT_ONLY_RESULT);
  });

  it('returns null if no date is entered', () => {
    expect(formatDateRange(NO_DATE)).toBeNull();
  });
});
