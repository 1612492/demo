import pool from '../db';
import { NFT, NFTQuery, PriceOrder, TimeOrder } from '../types';

export async function getAll(params: NFTQuery) {
  let query: string =
    'SELECT nfts.id as id, nfts.name as name, uri, price, category, tier, theme, created_at, avatar as owner_avatar, users.name as owner_name, verified as verified_owner FROM nfts, users';
  const conditions: string[] = [];
  const orders: string[] = [];

  if (params?.keyword) conditions.push(`nfts.name ILIKE '%${params.keyword}%'`);

  if (params?.category) conditions.push(`category ILIKE '${params.category}'`);

  if (params?.tier) conditions.push(`tier ILIKE '${params.tier}'`);

  if (params?.theme) conditions.push(`theme ILIKE '${params.theme}'`);

  if (params?.fromPrice) conditions.push(`price > ${params.fromPrice}`);

  if (params?.toPrice) conditions.push(`price < ${params.toPrice}`);

  query +=
    ` WHERE nfts.owner_id = users.id` +
    (conditions.length > 0 ? ` AND ${conditions.join(' AND ')}` : '');

  if (params?.priceOrder)
    orders.push(`price ${params.priceOrder === PriceOrder.Desc ? 'DESC' : 'ASC'}`);

  if (params?.timeOrder)
    orders.push(`created_at ${params.timeOrder === TimeOrder.Desc ? 'DESC' : 'ASC'}`);

  if (orders.length > 0) query += ' ORDER BY ' + orders.join(', ');

  query += ` OFFSET ${params?.offset ?? 0} LIMIT ${params?.limit ?? 20}`;

  return new Promise((resolve, reject) => {
    pool.query(query, (error, results) => {
      if (error) reject(error);
      resolve(results?.rows);
    });
  });
}

export async function save(nft: NFT) {
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO nfts (uri, name, price, category, tier, theme, owner_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [nft.uri, nft.name, nft.price, nft.category, nft.tier, nft.theme, nft.ownerId],
      (error, results) => {
        if (error) reject(error);
        resolve(results?.rows?.[0]);
      }
    );
  });
}
