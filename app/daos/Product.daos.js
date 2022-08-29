
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
    async findOneProductById(idProduct) {
        const findProduct = await Product.findById(idProduct)
        return findProduct
    }
    async deleteProduct(idProduct){
        const deleteProduct = await Product.findByIdAndDelete(idProduct)
        return deleteProduct
    }
    async updateProduct(idProduct, body){
        const updateProduct = await Product.findByIdAndUpdate(idProduct,body)
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
    async deleteAll(){
        const delAll = await Product.deleteMany({})
        return delAll
    }
}

export default new ProductDao()