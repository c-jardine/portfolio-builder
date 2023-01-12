import { inlineListSeparator, Separator } from '../inlineListSeparator';

const VALID_LIST = ['Test 1', 'Test 2', 'Test 3'];
const COMMA_SEPARATOR = Separator.COMMA;
const EMPTY_STRING = '';

describe('inlineListSeparator', () => {
  it('returns the expected string with Separator enum', () => {
    const expectedResult = 'Test 1, Test 2, Test 3';
    expect(inlineListSeparator(VALID_LIST, COMMA_SEPARATOR)).toBe(
      expectedResult
    );
  });

  it('returns the expected string with custom separator', () => {
    const separator = ':';
    const expectedResult = 'Test 1:Test 2:Test 3';
    expect(inlineListSeparator(VALID_LIST, separator)).toBe(expectedResult);
  });

  it('returns an empty string if the list is null', () => {
    expect(inlineListSeparator(null, COMMA_SEPARATOR)).toBe(EMPTY_STRING);
  });

  it('returns an empty string if the list is undefined', () => {
    expect(inlineListSeparator(undefined, COMMA_SEPARATOR)).toBe(EMPTY_STRING);
  });

  it('returns an empty string if the list is empty', () => {
    expect(inlineListSeparator([], COMMA_SEPARATOR)).toBe(EMPTY_STRING);
  });
});
