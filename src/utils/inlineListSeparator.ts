/**
 * Creates a string representation of the provided list with items separated by
 * the provided separator. Doesn't apply after the last element.
 * @param list The list to be formatted.
 * @param separator The separator used to separate each list item.
 * @returns The formatted string.
 */
export const inlineListSeparator = (
  list: string[],
  separator: Separator | string
) => {
  let inlinedList = '';
  list?.map((item, index) => {
    if (index < list.length - 1) {
      inlinedList += item + separator;
    } else {
      inlinedList += item;
    }
  });
  return inlinedList;
};

export enum Separator {
  BAR = ' | ',
  BULLET = ' • ',
  COMMA = ', ',
  SPACE = ' ',
}
