export type Option = {
  label: string;
  value: string;
};

export enum TimeOrder {
  Desc = 'desc',
  Asc = 'asc',
}

export enum PriceOrder {
  Desc = 'desc',
  Asc = 'asc',
}

export type Filter = {
  tier: Option;
  theme: Option;
  fromPrice: number;
  toPrice: number;
  timeOrder: Option;
  priceOrder: Option;
};

export type Query = {
  keyword: string;
  category: string;
  tier: string;
  theme: string;
  fromPrice: number;
  toPrice: number;
  timeOrder: string;
  priceOrder: string;
  offset: number;
  limit: number;
};

export type NFT = {
  id: number;
  uri: string;
  name: string;
  price: number;
  category: string;
  tier: string;
  theme: string;
  created_at: string;
  owner_avatar: string;
  owner_name: string;
  verified_owner: boolean;
};
