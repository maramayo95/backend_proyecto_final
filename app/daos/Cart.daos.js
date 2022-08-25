import Cart from '../models/cart.models.js'
import Product from '../models/product.models.js'
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
    async addProductToCart(idCart,idProduct,quantity){
        const product = await Product.findById({_id:idProduct})
        product.quantity = quantity
        const prodAdd = await Cart.updateOne({_id: idCart},{$addToSet: {products: product} }) ;
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
    async updateQuantityProduct(idCart, idProduct, quantity){
        //const product = await Product.findById({_id:idProduct})
        
        await this.deleteProductById(idProduct)
        const product = await Product.findById({_id:idProduct})
        product.quantity = quantity
        const prodAdd = await Cart.updateOne({_id: idCart},{$addToSet: {products: product} }) ;
        console.log(prodAdd) 
       
        return prodAdd
    }
}

export default new CartDao()