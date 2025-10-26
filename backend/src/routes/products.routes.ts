import express from 'express';
import products from '../controllers/products.controller';


const router = express.Router();

router.use("/inventary", products);


export default router;