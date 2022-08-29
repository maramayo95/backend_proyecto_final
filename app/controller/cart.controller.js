import CartServices from '../service/cart.services.js'

class CartController {
    async getCarts(req,res){
        try {
            const cart = await CartServices.getAllCarts()
            res.send(cart)
        } catch (error) {
            res.status(404).send(`No se ha podido encontrar los carritos: ${error}`)
        }
      
    }
    async getCartById(req,res){
        try {
            const id = req.params.id
            const cart = await CartServices.getCartById(id)
            res.send(cart)
        } catch (error) {
            res.status(404).send(`No se ha podido encontrar el carrito seleccionado: ${error}`)
        }
    }
    async addCart(req,res){
        try {
            const cart = await CartServices.saveCart() 
            res.status(201).send(cart)
        } catch (error) {
            res.status(500).send(`No se ha podido agregar el carrito debido a un error en el servidor ${error}`)
        }
    }
    
    async addProductToCart(req,res){
        const {idCart, idProduct, quantity} = req.params
        try {
                const cart = await CartServices.addProdToCart(idCart, idProduct, quantity)
                res.status(201).send(cart) 
        } catch (error) {
                res.status(400).send(error)   
        }
    }
    async deleteCartById(req,res){
        try {
            const id =  req.params.id
            const cart =  await CartServices.deleteOneCart(id)
            res.send(cart)
        } catch (error) {
            res.status(404).send(`No se ha podido encontrar el carrito seleccionado :  ${error}`)
        }
    }
    async deleteProductById(req,res){
        try {
            const {idCart, idProduct} = req.params
            const cart = await CartServices.deleteCartProductById(idCart, idProduct)
            res.send(cart)
        } catch (error) {
            res.status(404).send(`No se ha podido encontrar el producto seleccionado :  ${error}`)
        }
        
    }
    async updateProdCuantity(req,res){
        const {idCart, idProduct, quantity} = req.params
        try {
            const cart = await CartServices.updateProdCuantity(idCart, idProduct, quantity)
            return cart
        } catch (error) {
            res.status(500).send(`No se ha podido actualizar la cantidad seleccionada, verifique si todos los campos son correctos :  ${error}`)
        }
   
    }

}

export default new CartController()