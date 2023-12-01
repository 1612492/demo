import { PriceOrder, TimeOrder } from '../types';

export const categoryOptions = [
  { label: 'All', value: '' },
  { label: 'Legendary', value: 'Legendary' },
  { label: 'Mythic', value: 'Mythic' },
  { label: 'Epic', value: 'Epic' },
  { label: 'Rare', value: 'Rare' },
  { label: 'Common', value: 'Common' },
];

export const tierOptions = [
  { label: 'All', value: '' },
  { label: 'Tier 1', value: 'Tier 1' },
  { label: 'Tier 2', value: 'Tier 2' },
  { label: 'Tier 3', value: 'Tier 3' },
  { label: 'Tier 4', value: 'Tier 4' },
  { label: 'Tier 5', value: 'Tier 5' },
];

export const themeOptions = [
  { label: 'All', value: '' },
  { label: 'Theme 1', value: 'Theme 1' },
  { label: 'Theme 2', value: 'Theme 2' },
  { label: 'Theme 3', value: 'Theme 3' },
  { label: 'Theme 4', value: 'Theme 4' },
  { label: 'Theme 5', value: 'Theme 5' },
];

export const timeOptions = [
  { label: 'Latest', value: TimeOrder.Desc },
  { label: 'Oldest', value: TimeOrder.Asc },
];

export const priceOptions = [
  { label: 'Low to high', value: PriceOrder.Asc },
  { label: 'High to low', value: PriceOrder.Desc },
];
