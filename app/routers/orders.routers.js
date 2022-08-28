import {Router} from 'express'
import OrderController from '../controller/orders.controller.js'
const routeOrder = Router()

// routeOrder.post('/', generateOrder )
routeOrder.get('/', OrderController.getOrders)
routeOrder.get('/:idOrder', OrderController.getOrder)
routeOrder.post('/:idCart', OrderController.generateOrder)
routeOrder.delete('/:idOrder', OrderController.deleteOrder)
routeOrder.delete('/delete/all', OrderController.deleteAll)


export default  routeOrder