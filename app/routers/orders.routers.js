import {Router} from 'express'
import OrderController from '../controller/orders.controller.js'
const routeOrder = Router()

// routeOrder.post('/', generateOrder )
routeOrder.get('/', OrderController.getOrders)
routeOrder.post('/:idCart', OrderController.generateOrder)
routeOrder.delete('/:idOrder', OrderController.deleteOrder)



export default  routeOrder