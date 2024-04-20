import axios from 'axios'

class ProductsService {
    static getAllCategories = () => axios.get('/products/categories')
    static getAllProducts = () => axios.get('/products')
    static getAllProductsCategory = (currentCategory) => axios.get(`/products/category/${currentCategory}`)
    static getSingleProduct =(productId) => axios.get(`/products/${productId}`)
}

export default ProductsService