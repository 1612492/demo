import express from 'express';
import nft from './nft';
import user from './user';

export default {
  static: express.static('public'),
  nft,
  user,
};
