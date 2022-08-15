import {Router} from 'express'
import CartController from '../controller/cart.controller.js'

const routeCart = Router()

routeCart.post('/', CartController.addCart)


export default routeCart