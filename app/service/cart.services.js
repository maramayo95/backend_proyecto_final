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
    async addProdToCart(idCart, idProduct){
        const product = await ProductDao.findOneProductById(idProduct)
        const cart = await CartDao.addProductToCart(idCart, product)

          // Buscar producto en el service de carrito al dao de productos 
        // Desde el service de carrito paso al dao de carrito el producto completo 
        // Desde el dao de carrito agrego el producto en cart.products
        // Mandar idCart y producto por parametro al dao 
        // No grabas idProducto , grabas producto en el dao 
        return cart
    }
    async deleteOneCart(id){
        const cart = await CartDao.deleteCartById(id)
        return cart
    }
    async deleteCartProductById(idCart, idProduct){
        const cart = await CartDao.deleteProductById(idCart, idProduct)
        return cart
    }
}

export default new CartServices()
