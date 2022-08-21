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
    async deleteProductById(idCart, product){
        const deleteProd  = await Cart.updateOne({_id: idCart}, {$pull: {products:product}})
        return deleteProd
    }
}

export default new CartDao()