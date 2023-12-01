import { priceOptions, themeOptions, tierOptions, timeOptions } from '@utils/metadata';
import { Filter, Query } from '../types';

export const defaultFilters = {
  tier: tierOptions[0],
  theme: themeOptions[0],
  fromPrice: 0,
  toPrice: 2000,
  timeOrder: timeOptions[0],
  priceOrder: priceOptions[0],
};

export function filterToField(filter: Filter): Partial<Query> {
  return {
    fromPrice: filter.fromPrice,
    toPrice: filter.toPrice,
    tier: filter.tier.value,
    theme: filter.theme.value,
    timeOrder: filter.timeOrder.value,
    priceOrder: filter.priceOrder.value,
  };
}
