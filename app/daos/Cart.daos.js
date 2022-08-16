import Cart from '../models/cart.models.js'
import mongoose from 'mongoose'

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
    async deleteCartById(id){
        const cart = await Cart.deleteOne({_id: id})
        return cart
    }
    async deleteProductById(idCart, idProduct){
        const cart = await Cart.findOne({_id : idCart})
        //cart.products.filter(prod => prod.type != mongoose.Types.ObjectId(idProduct))
        cart.deleteOne({products: mongoose.Types.ObjectId(idProduct) })
        cart.save()
        return cart
    }
}

export default new CartDao()