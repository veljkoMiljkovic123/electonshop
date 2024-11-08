// ProductsService.js
import axios from "axios";

class ProductsService {
<<<<<<< HEAD
  static getAllCategories = () => axios.get("/products/categories");
  static getAllProducts = () => axios.get("/products");
  static getSingleProduct = (productId) => axios.get(`/products/${productId}`);
=======
    static getAllCategories = () => axios.get('/products/categories')
    static getAllProducts = () => axios.get('/products')
    static getAllProductsCategory = (currentCategory) => axios.get(`/products/category/${currentCategory}`)
    static getSingleProduct =(productId) => axios.get(`/products/${productId}`)
>>>>>>> c683fde2d71bb2d1353d798a1229566d6a152c5c
}

export default ProductsService;
