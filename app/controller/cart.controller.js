import CartServices from '../service/cart.services.js'

class CartController {
    async getCarts(req,res){
        try {
            const cart = await CartServices.getAllCarts()
            res.send(cart)
        } catch (error) {
            res.status(404).send(error)
        }
      
    }
    async getCartById(req,res){
        try {
            const id = req.params.id
            const cart = await CartServices.getCartById(id)
            res.send(cart)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    async addCart(req,res){
        try {
            const cart = await CartServices.saveCart() 
            res.status(201).send(cart)
        } catch (error) {
            res.status(500).send(console.log(error))
        }
    }
    
    async addProductToCart(req,res){
        try {
            const {idCart, idProduct} = req.params
            const cart = await CartServices.addProdToCart(idCart, idProduct)
            res.status(201).send(cart)
        } catch (error) {
            res.status(500).send(error)
        }
    }
    async deleteCartById(req,res){
        try {
            const id =  req.params.id
            const cart =  await CartServices.deleteOneCart(id)
            res.send(cart)
        } catch (error) {
            res.send(error)
        }
    }
    async deleteProductById(req,res){
        const {idCart, idProduct} = req.params
        const cart = await CartServices.deleteCartProductById(idCart, idProduct)
        res.send(cart)
    }

}

export default new CartController()