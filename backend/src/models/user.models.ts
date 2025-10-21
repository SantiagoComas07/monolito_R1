import {DataTypes} from 'sequelize'; // Model Optional
import sequelize from '../config/db';


// interface UserAttributes{
// id:number,
// name:string,
// age:number,
// email:string,
// password:string,
// role: 'Admin' | 'User'
// }



// interface UserCreationAtributes extends Optional<UserAttributes, 'id'>{}

// class User extends Model<UserAttributes, UserCreationAtributes> implements UserAttributes{
// public id:number,
// name:string,
// age:number,
// email:string,
// password:string,
// role: 'Admin' | 'User'
// }


const User = sequelize.define("User",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true

    },
    name: {
	type: DataTypes.STRING(50),
    allowNull: false
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
    defaultValue:'analyst'
}
})


export default User;