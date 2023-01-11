import { LocationType } from '../studio/types';

/**
 * Format the Location schema type.
 * @param location The location object returned by Sanity.
 * @returns A formatted string representation of the location.
 */
const formatLocation = (location: LocationType) => {
  const initLocation = location ?? null;
  if (!initLocation) return null;
  const customLocation = initLocation.customLocation
    ? initLocation.location
    : null;
  if (customLocation) return customLocation;
  const cityState =
    initLocation.city && initLocation.state
      ? `${initLocation.city}, ${initLocation.state}`
      : null;
  if (cityState) return cityState;
  return null;
};

export default formatLocation;
