import {Sequelize} from 'sequelize';

//Crear instancia
const sequelize  = new Sequelize(process.env.DB_NAME || 'wey',process.env.DB_USER || 'wey',process.env.DB_PASSWORD || 'wey', {
    host:process.env.DB_HOST,
    dialect:'postgres',
    logging: false,
});


export default sequelize;