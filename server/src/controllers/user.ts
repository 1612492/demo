import { Request, Response } from 'express';
import { save } from '../repositories/user';
import { User } from '../types';

export async function create(req: Request<never, never, User, never>, res: Response) {
  try {
    const user: User = req.body;
    const data = await save(user);

    res.status(201).send({ data });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Error when creating new user' });
  }
}
