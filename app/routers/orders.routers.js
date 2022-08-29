import {Router} from 'express'
import OrderController from '../controller/orders.controller.js'
import {isValidIdOrder} from '../middlewares/ordersValidator/isValidId.middlewares.js'
import {isValidIdCart} from '../middlewares/cartValidator/isValidid.middlewares.js'
import { orderPostValidator } from '../middlewares/ordersValidator/orderPostValidator.middlewares.js'
const routeOrder = Router()

// routeOrder.post('/', generateOrder )
routeOrder.get('/', OrderController.getOrders)
routeOrder.get('/:idOrder', isValidIdOrder, OrderController.getOrder)
routeOrder.post('/:idCart', isValidIdCart,  OrderController.generateOrder)
routeOrder.delete('/:idOrder', isValidIdOrder, OrderController.deleteOrder)
routeOrder.delete('/delete/all', OrderController.deleteAll)


export default  routeOrder