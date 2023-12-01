export type NFT = {
  id: number;
  uri: string;
  name: string;
  price: number;
  category: string;
  tier: string;
  theme: string;
  createdAt: number;
  updatedAt: number;
  ownerId: number;
};

export type User = {
  id: number;
  avatar: string;
  name: string;
  verified: boolean;
};

export enum TimeOrder {
  Desc = 'desc',
  Asc = 'asc',
}

export enum PriceOrder {
  Desc = 'desc',
  Asc = 'asc',
}

export type NFTQuery = {
  keyword?: string;
  category?: string;
  tier?: string;
  theme?: string;
  fromPrice?: number;
  toPrice?: number;
  timeOrder?: TimeOrder;
  priceOrder?: PriceOrder;
  offset?: number;
  limit?: number;
};
