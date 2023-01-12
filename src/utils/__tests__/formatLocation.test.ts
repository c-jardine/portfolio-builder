import { LocationType } from '../../studio/types';
import { formatLocation } from '../formatLocation';

const VALID_LOCATION: LocationType = {
  _type: 'location',
  city: 'Toledo',
  state: 'Ohio',
};
const VALID_CUSTOM_LOCATION: LocationType = {
  _type: 'location',
  customLocation: true,
  location: 'Mumbai, India',
};
const INVALID_LOCATION: LocationType = {
  _type: 'location',
};

describe('formatLocation', () => {
  it('returns a city and state separated by a comma', () => {
    const expectedResult = 'Toledo, Ohio';
    expect(formatLocation(VALID_LOCATION)).toBe(expectedResult);
  });

  it('returns a custom location', () => {
    const expectedResult = VALID_CUSTOM_LOCATION.location;
    expect(formatLocation(VALID_CUSTOM_LOCATION)).toBe(expectedResult);
  });

  it('returns null with invalid location', () => {
    expect(formatLocation(INVALID_LOCATION)).toBeNull();
  });
});
