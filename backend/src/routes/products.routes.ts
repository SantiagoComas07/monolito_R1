import express from 'express';
import products from '../controllers/products.controller';
import { verifyToken } from '../middleware/auth.middleware';


const router = express.Router();

/**
 * @swagger
 * /api/products/inventary:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     security:
 *       - BearerAuth: []
 *     description: JWT token is required to access this endpoint.
 *     responses:
 *       200:
 *         description: List of all products
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



/**
 * @swagger
 * /api/products/inventary:
 *   post:
 *     summary: Add a new product
 *     tags: [Products]
 *     security:
 *       - BearerAuth: []
 *     description: Creates a new product. Requires a valid JWT token and Analyst role.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *                 example: "HP Pavilion 15 Laptop"
 *               description:
 *                 type: string
 *                 example: "High-performance 15-inch HP laptop with 16GB RAM"
 *               price:
 *                 type: number
 *                 example: 1200.99
 *               stock:
 *                 type: integer
 *                 example: 10
 *               category:
 *                 type: string
 *                 example: "electronics"
 *               imageURL:
 *                 type: string
 *                 example: "https://example.com/images/hp-pavilion.jpg"
 *     responses:
 *       201:
 *         description: Product successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 message:
 *                   type: string
 *                   example: "Product created successfully"
 *                 product:
 *                   $ref: '#/components/schemas/Product'
 */

router.post("/create", verifyToken, products);



export default router;