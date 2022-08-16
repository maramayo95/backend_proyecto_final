import Cart from '../models/cart.models.js'

class CartDao {
    async getCarts(){
        const cart = await Cart.find()
        console.log(cart)
        return cart 
    }
    async getCartById(id){
        const cart = await Cart.findById({_id: id})
        return cart 
    }
    async addCart(){
        const  addNewCart = await  Cart.create({
            date: Date().toString()
        })
        return addNewCart
    }
    async addProductToCart(idCart,idProduct){
        const cart = await Cart.findOne({_id: idCart})
        cart.products.push(idProduct)
        cart.save()
        //No carga mas de dos productos
        return cart
        // const cart = await
    }
}

export default new CartDao()