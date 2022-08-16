import {Router} from 'express'
import CartController from '../controller/cart.controller.js'

const routeCart = Router()
routeCart.get('/:id', CartController.getCartById)
routeCart.get('/', CartController.getCarts)
routeCart.post('/', CartController.addCart)
routeCart.post('/:idCart/producto/:idProduct', CartController.addProductToCart)



export default routeCart