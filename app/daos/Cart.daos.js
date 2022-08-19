import Cart from '../models/cart.models.js'
import mongoose from 'mongoose'

class CartDao {
    async getCarts(){
        const cart = await Cart.find()
        console.log(cart)
        return cart 
    }
    async getCartById(id){
        console.log('Este es getCartBy Id' + '' + id)
        const cart = await Cart.findById({_id: id})
        console.log('Este es el cart de getbyId' + cart )
        return cart 
    }
    async addCart(){
        const  addNewCart = await  Cart.create({
            date: Date().toString()
        })
        return addNewCart
    }
    async addProductToCart(idCart,product){
        const prodAdd = await Cart.updateOne({_id: idCart}, {$addToSet: {products: product} }) ;
        return prodAdd
    }
    async deleteCartById(id){
        const cart = await Cart.deleteOne({_id: id})
        return cart
    }
    async deleteProductById(idCart, idProduct){
        console.log(idCart)
        const cart = await this.getCartById(idCart)
        console.log('delete product by id ' + cart)
        //const cart = await Cart.findOne({_id : idCart})
        //const filter = cart.products.filter(prod =>  !=  )
        // cart.deleteOne({products: mongoose.Types.ObjectId(idProduct) })
        //cart.save()
        return cart
    }
}

export default new CartDao()