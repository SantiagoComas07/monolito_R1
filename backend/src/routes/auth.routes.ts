import express from 'express';
import { validateLogin } from '../middleware/auth.middleware';
import { login } from '../controllers/auth.controller';

const router = express.Router();

router.post('/login', validateLogin, login)