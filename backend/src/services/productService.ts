import {Product} from '../models';


export class ProductServices {
 async getAllProducts() {
    const products = await Product.findAll();
    return products;
}

}



export default ProductServices;