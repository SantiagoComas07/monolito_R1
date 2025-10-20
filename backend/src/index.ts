import express from 'express';
import dotenv from 'dotenv';
import barrel from './routes/index'
dotenv.config();

const app = express();

app.use(barrel)

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`Server is running in http://localhost${port}`);
});