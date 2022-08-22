import {Router} from 'express'
import CartController from '../controller/cart.controller.js'
import verifyToken from '../middlewares/auth/auth.middleware.js'

const routeCart = Router()
routeCart.get('/:id', CartController.getCartById)
routeCart.get('/',  CartController.getCarts)
routeCart.post('/', CartController.addCart)
routeCart.post('/:idCart/producto/:idProduct/cantidad/:quantity', CartController.addProductToCart)
routeCart.delete('/:id', CartController.deleteCartById )
routeCart.delete('/:idCart/producto/:idProduct', CartController.deleteProductById)
routeCart.put('/:idCart/producto/:idProduct/cantidad/:quantity', CartController.updateProdCuantity)


export default routeCart