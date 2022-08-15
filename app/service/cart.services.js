import CartDao from '../daos/Cart.daos.js'

class CartServices {
    async saveCart(){
            const saveNewCart = await CartDao.addCart()
            return saveNewCart
    }


}

export default new CartServices()
