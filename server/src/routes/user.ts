import { Router } from 'express';
import { create } from '../controllers/user';

const router = Router();

router.post('/create', create);

export default router;
