import {Product} from '../models';


export class ProductServices {
    async getAllProducts() {
        const products = await Product.findAll();
        return products;
    }

    async createProduct(data:any){
        try{
            const {name,description,price,stock}=data;

            //Validate  required fields

            if(!name || !price){
                throw new Error('name and price are required')
            };

            const newProduct = await Product.create({
                name,
                description,
                price,
                stock: stock || 0,
                category: data.category || 'general',
                imageURL: data.imageURL || ''
            })

            return newProduct;


        }catch(error){
        console.log("Error creating product:", error);
    }

    }


}



export default ProductServices;