import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

//Create instance of Sequelize
const sequelize  = new Sequelize(process.env.DB_NAME || 'error',process.env.DB_USER || 'error',process.env.DB_PASSWORD || 'error', {
    host:process.env.DB_HOST,
    dialect:'postgres',
    logging: false,
});


export default sequelize;