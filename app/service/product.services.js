import ProductDao from "../daos/Product.daos.js";

class ProductServices {
    async listProducts() {
        const listProds = await ProductDao.listProducts()
        return listProds
    }
    async saveProduct(objProd) {
        //Validate data of objProd
        const saveProd = await ProductDao.saveProduct(objProd)
        return saveProd
    }

    async findProductById(id) {
        const findProduct = await ProductDao.findOneProductById(id)
        return findProduct
    }
    async deleteProduct(id){
        const deleteProduct = await ProductDao.deleteProduct(id)
        return deleteProduct
    }
    async updateProduct(id, body){
        const updateProduct = await ProductDao.updateProduct(id,body)
        return updateProduct
    }
    async findCategory(category){
        console.log(category + 'services')
        const findByCategory = await ProductDao.findCategory(category)
        return findByCategory
    }
    
    

}


export default new ProductServices()