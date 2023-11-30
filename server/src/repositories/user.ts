import pool from '../db';
import { User } from '../types';

export async function save(user: User) {
  return new Promise((resolve, reject) => {
    pool.query(
      'INSERT INTO users (avatar, name, verified) VALUES($1, $2, $3) RETURNING *',
      [user.avatar, user.name, user.verified],
      (error, results) => {
        if (error) reject(error);
        resolve(results.rows[0]);
      }
    );
  });
}
