import ProductDao from "../daos/Product.daos.js";

class ProductServices {
    async listProducts() {
        const listProds = await ProductDao.listProducts()
        return listProds
    }
    async saveProduct(objProd) {
        const saveProd = await ProductDao.saveProduct(objProd)
        return saveProd
    }
    async findProductByidProduct(idProduct) {
        const findProduct = await ProductDao.findOneProductByidProduct(idProduct)
        return findProduct
    }
    async deleteProduct(idProduct){
        const deleteProduct = await ProductDao.deleteProduct(idProduct)
        return deleteProduct
    }
    async updateProduct(idProduct, body){
        const updateProduct = await ProductDao.updateProduct(idProduct,body)
        return updateProduct
    }
    async findCategory(category){
        const findByCategory = await ProductDao.findCategory(category)
        return findByCategory
    }
    async deleteAll(){
        const delAll = await ProductDao.deleteAll()
        return delAll
    }
}


export default new ProductServices()