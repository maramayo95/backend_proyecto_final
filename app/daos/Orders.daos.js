import Cart from "../models/cart.models.js"

class OrderDao {
    async generateOrder(idCart){
        const cart = await Cart.findById(idCart)
        
    }
}

export default new OrderDao()