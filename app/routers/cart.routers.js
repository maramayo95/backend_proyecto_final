import {Router} from 'express'
import CartController from '../controller/cart.controller.js'
import {isValidIdCart} from '../middlewares/cartValidator/isValidid.middlewares.js'
import {isValidIdProduct} from '../middlewares/productValidator/isValidId.middlewares.js'
import verifyToken from '../middlewares/auth/auth.middleware.js'

const routeCart = Router()
routeCart.get('/:id', isValidIdCart, CartController.getCartById)
routeCart.get('/',  CartController.getCarts)
routeCart.post('/', CartController.addCart)
routeCart.post('/:idCart/producto/:idProduct/cantidad/:quantity', isValidIdCart,isValidIdProduct, CartController.addProductToCart)
routeCart.delete('/:id', isValidIdCart, CartController.deleteCartById )
routeCart.delete('/:idCart/producto/:idProduct', isValidIdCart, isValidIdProduct, CartController.deleteProductById)
routeCart.put('/:idCart/producto/:idProduct/cantidad/:quantity', isValidIdCart, isValidIdProduct, CartController.updateProdCuantity)


export default routeCart