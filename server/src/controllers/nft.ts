import { Request, Response } from 'express';
import { getAll, save } from '../repositories/nft';
import { NFT, NFTQuery } from '../types';

export async function query(req: Request<never, never, never, NFTQuery>, res: Response) {
  const data = await getAll(req.query);

  res.status(200).send({ data });
}

export async function create(req: Request<never, never, NFT, never>, res: Response) {
  try {
    const nft: NFT = req.body;
    const data = await save(nft);

    res.status(201).send({ data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error when creating new NFT' });
  }
}
