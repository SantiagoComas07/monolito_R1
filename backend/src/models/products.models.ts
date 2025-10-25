import {DataTypes, Model, Optional} from 'sequelize';
import sequelize from '../config/db';

// Interface with attributes of products 

interface ProductAttributes{
    id: number;
    name:string;
    description?:string;
    price:number;
    stock:number;
    category:string;
    imageURL?:string;
}

// Interface for creation, id is generated automatically
interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'>{}

// Models product definition

class Product extends Model<ProductAttributes, ProductCreationAttributes> 
implements ProductAttributes{
    public id!: number;
    public name!:string;
    public description?:string;
    public price!:number;
    public stock!:number;
    public category!:string;
    public imageURL!:string;


    public readonly createAt!:Date;
    public readonly updateAt!:Date;
}



Product.init({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    description:{
        type:DataTypes.STRING(255),
        allowNull:true,
    },  
      price:{
        type:DataTypes.FLOAT,
        allowNull:true,
    },  
      stock:{
        type:DataTypes.INTEGER,
        allowNull:true,
    }, 
       category:{
        type:DataTypes.STRING(100),
        allowNull:true,
    },
        imageURL:{
        type:DataTypes.STRING,
        allowNull:true,
        validate:{
            isUrl:true,
        }
    }
}
,{
    sequelize,
    tableName:'products',
    timestamps:true, // Add createAT and updatedAt
}
);



export default Product;