import express from 'express';
import products from '../controllers/products.controller';


const router = express.Router();


/**
 * @swagger 
 * /users:
 * get:
 * summary: products list
 * reponse:
 * 200
 * description: products list in the inventary
 */

router.use("/inventary", products);


export default router;