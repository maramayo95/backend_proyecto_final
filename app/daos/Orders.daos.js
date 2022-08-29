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
                {   date: new Date(),
                    email: order.email,
                    adress: order.adress,
                    products: cart.products,
                    numberOrder: incNumberOrder
                }
            )
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