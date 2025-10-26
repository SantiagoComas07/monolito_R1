    import {Request,Response} from 'express';
import ProductServices from '../services/productService';
    


const productService = new ProductServices();

export const getAllProductsController = async(req:Request, res:Response):Promise<void> =>{
    try{
        const products = await productService.getAllProducts();
        res.status(200).json(products)   
     }catch(error){
        console.error("Error en getProducts:", error);
        res.status(500).json({message:"Error inesperado en getProducts:"});
    }
}



export default getAllProductsController;