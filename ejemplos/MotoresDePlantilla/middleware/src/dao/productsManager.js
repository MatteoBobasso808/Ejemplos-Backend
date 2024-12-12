import products  from '../data/products.json';

export class productsManager {
    static async getProducts() {
        return products;
    }
}