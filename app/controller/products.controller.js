

import ProductServices from "../service/product.services.js";


class ProductController{ 
    async listProducts(req,res) {
        const products = await ProductServices.listProducts()
        res.send(products)
    }
    async saveProducts(req,res){
        try {
           // console.log(req.body)
            const product = req.body
            const newProduct = await ProductServices.saveProduct(product)
            res.send(newProduct).status(201)
          
            
        } catch (error) {
            res.json(error).status(500)
        }
    }
    async getOneProduct(req,res){
        try {
            const id = req.params.id;
            const findProduct = await ProductServices.findProductById(id)
            res.send(findProduct)
        } catch (error) {
            res.json(error).status(404)
        }
    }
    async deleteProduct(req,res){
        try {
            const id = req.params.id;
            const deleteProduct = await ProductServices.deleteProduct(id)
            res.send(deleteProduct)
        } catch (error) {
            res.json(error)
        }
    }
    async updateProduct(req,res){
        try {
            const id = req.params.id;
            const body = req.body
            const updateProduct = await ProductServices.updateProduct(id, body)
            res.send(updateProduct)
            
        } catch (error) {
            res.json(error)
        }
    }

    async findCategory(req,res){
        try {
            const category = req.params.categoria
            const findByCategory = await ProductServices.findCategory(category)
            res.send(findByCategory)
        } catch (error) {
            res.json(error)
        }
    }
}

export default new ProductController()