import express from 'express';
import dotenv from 'dotenv';
import barrel from './routes/index';
import { initDB } from './models/connection.models';
dotenv.config();

const app = express();

app.use(barrel)

const port = process.env.PORT;

const startServer = async()=>{
try{
        await initDB();

app.listen(port, ()=>{
    console.log(`Server is running in http://localhost:${port}`);
});
}catch(error){
    console.error('Failed to start server', error);
}
}
