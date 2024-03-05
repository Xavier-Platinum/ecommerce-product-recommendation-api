import { Router } from 'express';
import { recommendProductsToUserController } from '../../controllers/index.js';
const router = Router();

router.get('/:userId', recommendProductsToUserController);

export default router;
