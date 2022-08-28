import OrderServices from "../service/order.services.js"
class OrderController {
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
    async getOrders(req,res){
        try {
            const orders = await OrderServices.getOrders()
            res.send(orders)
        } catch (error) {
            res.status(500).send(`No se ha podido efectuar la operación debido al error ${error}`)
        }
    }
    async deleteOrder(req,res){
        try {
            const idOrder = req.params.idOrder
            const deleteOrderById = await OrderServices.deleteOrderById(idOrder)
            return deleteOrderById
        } catch (error) {
            res.status(404).send(`No se ha encontrado la orden solicitada : ${error}`)
        }
    }

}


export default new OrderController()