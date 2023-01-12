import { DateRangeType, MonthYearType } from '../studio/types';

/**
 * Helper function that formats a month and year.
 */
const formatMonthAndYear = (month: string, year: string) => {
  return `${month} ${year}`;
};

/**
 * Formats the MonthYear schema type.
 * @param date The date object returned by Sanity.
 * @returns The month and year if both are provided; or the year if no month is
 * provided; or null if neither are provided.
 */
export const formatDate = (date: MonthYearType) => {
  if (date.month && date.year) return formatMonthAndYear(date.month, date.year);
  if (date.year) return date.year;
  return null;
};

/**
 * Helper function that formats from and to dates.
 */
const formatDatesFromTo = (from: MonthYearType, to: MonthYearType) => {
  const formatFrom = formatDate(from);
  const formatTo = formatDate(to);
  return `${formatFrom} - ${formatTo}`;
};

/**
 * Formats the DateRange schema type.
 * @param date The date range object returned by Sanity.
 * @returns A formatted string representation of the date range.
 */
export const formatDateRange = (date: DateRangeType) => {
  // April 2008 - June 2010
  if (!date.present && date.from && date.to)
    return formatDatesFromTo(date.from, date.to);

  // June 2010
  if (!date.present && !date.from && date.to) return formatDate(date.to);

  // present
  if (date.present && !date.from && !date.to) return 'present';

  // April 2008 - present
  if (date.present && date.from) return `${formatDate(date.from)} - present`;
  return null;
};
