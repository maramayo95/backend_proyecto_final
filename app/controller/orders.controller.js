import OrderServices from "../service/order.services.js"
class OrderController {
    async getOrders(req,res){
        try {
            const orders = await OrderServices.getOrders()
            res.send(orders)
        } catch (error) {
            res.status(500).send(`No se ha podido efectuar la operación debido al error ${error}`)
        }
    }
    async getOrder(req,res){
        try {
            const idOrder = req.params.idOrder
            const order = await OrderServices.getOrder(idOrder)
            res.send(order)
        } catch (error) {
            res.status(404).send(`No se ha podido encontrar la orden solicitada : ${error}`)
        }
    }
    async generateOrder(req,res){
        try {
            const idCart = req.params.idCart
            const order = req.body
            const generate = await OrderServices.generateOrder(idCart, order)
            res.send(generate)
        } catch (error) {
            res.status(403).send(`Ingrese correctamente sus datos : ${error}`)
        }
    }
    
    async deleteOrder(req,res){
        try {
            const idOrder = req.params.idOrder
            const deleteOrd = await OrderServices.deleteOrderById(idOrder)
            res.send(deleteOrd)
        } catch (error) {
            res.status(404).send(`No se ha encontrado la orden solicitada : ${error}`)
        }
    }
    async deleteAll(req,res){
        try {
            const delAll = await OrderServices.deleteAll()
            res.send(delAll)
        } catch (error) {
            res.status(404).send(`No se pudo borrar todas las ordenes : ${error}`)
        }
    }

}


export default new OrderController()