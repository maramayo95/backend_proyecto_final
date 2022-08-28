import OrderDao from "../daos/Orders.daos.js"
import CartDao from "../daos/Cart.daos.js"
import sendMail from "../utils/nodemailer.js"

class OrderServices {
    async generateOrder(idCart,order){
        const cart = await CartDao.getCartById(idCart)
        const generate = await OrderDao.generateOrder(cart,order)
        await sendMail(generate)
        //agregar funcion para eliminar carrito del por id 
        
        return generate
    }
    async getOrders(){
        const getOrders = await OrderDao.getOrders()
        return getOrders
    }
    async deleteOrderById(idOrder){
        const deleteOrder = await OrderDao.deleteOrderById(deleteOrderById)
        return deleteOrder
    }
}

export default new OrderServices()