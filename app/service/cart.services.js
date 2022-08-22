import CartDao from '../daos/Cart.daos.js'
import ProductDao from '../daos/Product.daos.js'

class CartServices {
    async getAllCarts(){
        const cart = await CartDao.getCarts()
        return cart
    }
    async getCartById(id){
        const cart = await CartDao.getCartById(id)
        return cart 
    }
    async saveCart(){
            const saveNewCart = await CartDao.addCart()
            return saveNewCart
    }
    async addProdToCart(idCart, idProduct, quantity){
        //const product = await ProductDao.addQuantityOrUpdate(idProduct, quantity)
        const cart = await CartDao.addProductToCart(idCart, idProduct, quantity)
        return cart
    }
    async deleteOneCart(id){
        const cart = await CartDao.deleteCartById(id)
        return cart
    }
    async deleteCartProductById(idCart, idProduct){
        const product = await ProductDao.findOneProductById(idProduct)
        const cart = await CartDao.deleteProductById(idCart, product)
        return cart
    }
    async updateProdCuantity(idCart, idProduct, quantity){
        //const product = await ProductDao.addQuantityOrUpdate(idProduct, quantity)
        const updateProduct = await CartDao.updateQuantityProduct(idCart, idProduct, quantity)
        return updateProduct
    }
}

export default new CartServices()
