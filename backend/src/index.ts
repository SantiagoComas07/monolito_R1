import express from 'express';
import dotenv from 'dotenv';
import barrel from './routes/index';
import { initDB } from './models/connection.models';
import swaggerConfig from './config/swagger';
const { swaggerUi, swaggerSpec } = swaggerConfig;

dotenv.config();

const app = express();

app.use(express.json());
app.use('/api', barrel);
// swagger route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
const port = process.env.PORT;
// start server function
const startServer = async()=>{
try{
    await initDB();
app.listen(port, ()=>{
    console.log(`Server is running in http://localhost:${port}`);
    console.log(`Swagger docs http://localhost:${port}/api-docs`);
});
}catch(error){
    console.error('Failed to start server', error);
}
}

startServer();