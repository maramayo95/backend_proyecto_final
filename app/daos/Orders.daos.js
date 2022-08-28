import Cart from "../models/cart.models.js"
import Order from '../models/orders.models.js'

class OrderDao {
    async getOrders(){
        const orders = await Order.find()
        return orders
    }
    async getOrder(idOrder){
        const order = await Order.findById({_id: idOrder})
        return order
    }
    async generateOrder(cart, order, incNumberOrder){
    if(!cart) return null
        const newOrder = await Order.create(
                {
                    email: order.email,
                    products: cart.products,
                    numberOrder: incNumberOrder
                }
            )
        // 5. En el return de servicios ejecutar nodemailer 
        // 6. Eliminar Carrito 
        return newOrder
        
    }
    async deleteOrderById(idOrder){
        const deleteOrder = await Order.findByIdAndDelete(idOrder)
        return deleteOrder
    }
    async deleteAll(){
        const deleteAll = await Order.deleteMany({})
        return deleteAll
    }
}

export default new OrderDao()