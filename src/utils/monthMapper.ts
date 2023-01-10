import { MonthKeyType, MonthValueType } from '../types';

/**
 * A lookup table to convert the month of MonthYear Sanity objects to the full
 * month name.
 */
const monthLookupTable: Record<MonthKeyType, MonthValueType> = {
  jan: 'January',
  feb: 'February',
  mar: 'March',
  apr: 'April',
  may: 'May',
  jun: 'June',
  jul: 'July',
  aug: 'August',
  sep: 'September',
  oct: 'October',
  nov: 'November',
  dec: 'December',
};

/**
 * A mapper to convert the month of MonthYear objects returned by Sanity to
 * the full name of the month.
 * @param month The month property of the MonthYear object.
 * @returns A full month name matching the month parameter.
 */
const monthMapper = (month: MonthKeyType) => monthLookupTable[month];

export default monthMapper;
