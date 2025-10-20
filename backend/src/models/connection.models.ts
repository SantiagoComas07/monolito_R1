import sequelize from '../config/db';
import '../models';


export const initDB = async() =>{
    try{
        await sequelize.authenticate();
        console.log('Postgres connection has been established successfully');
  
        await sequelize.sync({force:false, alter: true});
        console.log('Database synchronized')
    }catch(error){
        console.error('Erroorrrr')
    }

};