    import {Request,Response} from 'express';
import ProductServices from '../services/productService';
    

//Create instance of ProductServices
const productService = new ProductServices();

// Function to get all products
export const getAllProductsController = async(req:Request, res:Response):Promise<void> =>{
    try{
        const products = await productService.getAllProducts();
        res.status(200).json(products)   
     }catch(error){
        console.error("Error en getProducts:", error);
        res.status(500).json({message:"Error in getProducts:"});
    }
}

export const createProduct = async(req:Request, res:Response):Promise<void>=>{
    try{
        const productData = req.body;
        const productCreate = await productService.createProduct(productData);
    }catch(error){
        console.error("Error creating product:", error);
        res.status(500).json({message:"Error in createProduct:"});
    }
}

export default getAllProductsController;