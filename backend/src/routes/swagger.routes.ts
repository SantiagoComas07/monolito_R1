import express from 'express';
const router = express.Router();
import swaggerConfig from '../config/swagger';
const {swaggerUi, swaggerSpec} = swaggerConfig;


router.use("/api-docs", swaggerUi.setup(swaggerSpec));


export default router;