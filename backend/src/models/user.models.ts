import {DataTypes, Model, Optional} from 'sequelize'; // Model Optional
import sequelize from '../config/db';
import bcrypt from 'bcryptjs';
import passwordService from '../services/encrypted';


interface UserAttributes{
id:number,
name:string,
email:string,
password:string,
role: 'Admin' | 'User'
}



interface UserCreationAtributes extends Optional<UserAttributes, 'id'>{}

class User extends Model<UserAttributes, UserCreationAtributes> implements UserAttributes{
public id!:number;
public name!:string;
public age!:number;
public email!:string;
public password!:string;
public role!: 'Admin' | 'User';


public async comparePassword(candidatePassword:string):Promise <boolean>{
    return bcrypt.compare(candidatePassword,this.password);
}


}


User.init(
    {
        id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,

        },
        name:{
        type: DataTypes.STRING(50),
        allowNull: false,
        },
        email: {
        type: DataTypes.STRING(100),
        allowNull:false,
        unique:true,
        validate:{
        isEmail:true,
        }
        },   
        password: {
        type: DataTypes.STRING(100),
        allowNull: false
        },
        role:{
        type: DataTypes.ENUM('admin', 'analyst'),
        allowNull:false,
        defaultValue:'analyst',
    },
},
{
sequelize,
tableName: 'User',
hooks:{
    //Hook para encriptar la ontraseña antes de crear el usuario 
    beforeCreate: async (user:User)=>{
        user.password = await passwordService.hashPassword(user.password);
    },
    beforeUpdate: async (user:User)=>{
        // Antes de actualizar la contraseña en la base de datos la hasheo con bycript
        if(user.changed('password')){
         user.password = await passwordService.hashPassword(user.password);
        }
        }
    }

}
)


export default User;