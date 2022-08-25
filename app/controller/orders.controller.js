import OrderServices from "../service/order.services.js"
class OrderController {
    async generateOrder(req,res){
        try {
            const idCart = req.body
            const generate = await OrderServices.generateOrder(idCart)
            res.send(generate)
        } catch (error) {
            res.status(403).send("Los datos son incorrectos")
        }
    }

}


export default new OrderController()