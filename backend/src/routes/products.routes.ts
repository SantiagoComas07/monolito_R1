import express from 'express';
import products from '../controllers/products.controller';
import { verifyToken } from '../middleware/auth.middleware';


const router = express.Router();

/**
 * @swagger
 * /products/inventary:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Products]
 *     security:
 *       - BearerAuth: []
 *     description: Se requiere token JWT válido para acceder.
 *     responses:
 *       200:
 *         description: Lista de productos obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       401:
 *         description: No autorizado, token faltante o inválido
 *       403:
 *         description: Token inválido
 */

router.get("/inventary", verifyToken, products);


export default router;