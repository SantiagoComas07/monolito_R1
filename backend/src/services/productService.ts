import {Request, Response} from 'express';
import Product from '../models/products.models';


export class ProductServices {
 async getAllProducts() {
    const products = await Product.findAll();
    return products;
}

}



export default ProductServices;