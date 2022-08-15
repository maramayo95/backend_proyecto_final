import Cart from '../models/cart.models.js'

class CartDao {
    async addCart(){
        const  addNewCart = await  Cart.create({
            date: Date().toString()
        })
        return addNewCart
    }
}

export default new CartDao()