import CartServices from '../service/cart.services.js'

class CartController {
    async addCart(req,res){
      
            const saveCart = await CartServices.saveCart() 
            res.status(201).send(saveCart)
  
    }
    // async addProductToCart(req,res){
    //     try {
            
    //     } catch (error) {
    //         res.status(500).send(error)
    //     }
    // }
}

export default new CartController()