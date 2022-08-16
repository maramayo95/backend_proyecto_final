import CartDao from '../daos/Cart.daos.js'

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
    async addProdToCart(idProduct, idCart){
        const cart = await CartDao.addProductToCart(idProduct,idCart)
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
