import express from 'express';
import greetings from '../controllers/people.controller';


const route = express.Router();

route.use("/", greetings);


export default route;