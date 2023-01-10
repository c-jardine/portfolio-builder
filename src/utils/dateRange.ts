import { DateRangeType, MonthYearType } from '../studio/types';
import monthMapper from './monthMapper';

/**
 * Formats the MonthYear schema type.
 * @param date The date object returned by Sanity.
 * @returns The month and year if both are provided; or the year if no month is
 * provided; or null if neither are provided.
 */
const formatDate = (date: MonthYearType) => {
  const monthAndYear = (date.month && date.year) ?? null;
  if (monthAndYear) return `${monthMapper(date.month)} ${date.year}`;
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
  const fromDate = formatDate(date.from);
  const toDate = date.present ? 'present' : formatDate(date.to);
  const from = fromDate ? `${fromDate} - ` : '';
  const to = toDate ? toDate : '';
  return `${from} ${to}`;
};
