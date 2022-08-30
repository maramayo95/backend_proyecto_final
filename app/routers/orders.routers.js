import {Router} from 'express'
import OrderController from '../controller/orders.controller.js'
import {isValidIdOrder} from '../middlewares/ordersValidator/isValidId.middlewares.js'
import {isValidIdCart} from '../middlewares/cartValidator/isValidid.middlewares.js'
import { orderPostValidator } from '../middlewares/ordersValidator/orderPostValidator.middlewares.js'
import verifyToken from '../middlewares/auth/auth.middleware.js'

const routeOrder = Router()

// routeOrder.post('/', generateOrder )
routeOrder.get('/', verifyToken, OrderController.getOrders)
routeOrder.get('/:idOrder',[verifyToken, isValidIdOrder], OrderController.getOrder)
routeOrder.post('/:idCart',[verifyToken,  isValidIdCart],  OrderController.generateOrder)
routeOrder.delete('/:idOrder', [verifyToken, isValidIdOrder], OrderController.deleteOrder)
routeOrder.delete('/delete/all', verifyToken,  OrderController.deleteAll)


export default  routeOrder