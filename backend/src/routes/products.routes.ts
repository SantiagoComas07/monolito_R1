import express from 'express';
import greetings from '../controllers/products.controller';


const route = express.Router();

route.use("/Products", greetings);


export default route;