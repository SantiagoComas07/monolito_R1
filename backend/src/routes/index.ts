import express from 'express';
import authRoute from './auth.routes';
import productRoute from './products.routes';

const router = express.Router()

router.use('/auth', authRoute);
router.use('/products',productRoute);

export default router;
