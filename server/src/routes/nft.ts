import { Router } from 'express';
import { query, create } from '../controllers/nft';

const router = Router();

router.get('/', query);
router.post('/create', create);

export default router;
