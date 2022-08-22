
import Product from '../models/product.models.js'

class ProductDao {
    async listProducts(){
        const listProds = await Product.find()
        return listProds
    }
    async saveProduct(product) {
        const addProduct = await Product.create(product)
        return addProduct
    }
    async findOneProductById(id) {
        const findProduct = await Product.findById(id)
        return findProduct
    }
    async deleteProduct(id){
        const deleteProduct = await Product.findByIdAndDelete(id)
        return deleteProduct
    }
    async updateProduct(id, body){
        const updateProduct = await Product.findByIdAndUpdate(id,body)
        return updateProduct
    }
    async findCategory(category){
        const findByCategory = await Product.find({category:category})
        return findByCategory
    }
    async addQuantityOrUpdate(idProduct, quantity){
        const addQuantityToProdOrUpdate = await Product.findByIdAndUpdate({_id: idProduct},{$set:{quantity:quantity}})
        return addQuantityToProdOrUpdate
    }
}

export default new ProductDao()