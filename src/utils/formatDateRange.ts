import { DateRangeType, MonthYearType } from '../studio/types';

/**
 * Formats the MonthYear schema type.
 * @param date The date object returned by Sanity.
 * @returns The month and year if both are provided; or the year if no month is
 * provided; or null if neither are provided.
 */
export const formatDate = (date: MonthYearType) => {
  const monthAndYear = (date.month && date.year) ?? null;
  if (monthAndYear) return `${date.month} ${date.year}`;
  const year = date.year ?? null;
  if (year) return year;
  return null;
};

/**
 * Formats the DateRange schema type.
 * @param date The date range object returned by Sanity.
 * @returns A formatted string representation of the date range.
 */
export const formatDateRange = (date: DateRangeType) => {
  const fromDate = date.from && formatDate(date.from);
  const toDate = date.present ? 'present' : date.to && formatDate(date.to);
  const from = fromDate ? `${fromDate}` : null;
  const to = toDate ? toDate : null;

  if (!from && !to) return null;

  return `${from ? `${from} - ` : ''}${to}`;
};
