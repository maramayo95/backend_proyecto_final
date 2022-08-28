import Cart from "../models/cart.models.js"
import Order from '../models/orders.models.js'

class OrderDao {
    async generateOrder(cart, body){
            const newOrder = await Order.create(
                {
                    email: body.email,
                    products: cart.products
                }
            )
        // 5. En el return de servicios ejecutar nodemailer 
        // 6. Eliminar Carrito 
        return newOrder
        
    }
    async getOrders(){
        const orders = await Order.find()
        return orders
    }
    async deleteOrderById(idOrder){
        const deleteOrder = await Order.findByIdAndDelete({_id : idOrder})
        return deleteOrder
    }
}

export default new OrderDao()