    import {Request,Response} from 'express';
import ProductServices from '../services/productService';
    
export const getAllProductsController = async(req:Request, res:Response):Promise<void> =>{
    try{
        const products = await ProductServices.getAllProducts();
    }catch(error){
        console.error("Error inesperado en getProducts:", error)
    }
}