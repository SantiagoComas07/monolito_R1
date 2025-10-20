import greetings from './home.routes';
import express from 'express';

const router = express.Router()



router.get('/greet', greetings);



export default router;
