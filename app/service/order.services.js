import OrderDao from "../daos/Orders.daos.js"
import CartDao from "../daos/Cart.daos.js"
import sendMail from "../utils/nodemailer.js"

class OrderServices {
    async getOrders(){
        const getOrders = await OrderDao.getOrders()
        return getOrders
    }
    async getOrder(idOrder){
        const getOrder = await OrderDao.getOrder(idOrder)
        return getOrder
    }
    async generateOrder(idCart,order){
        const cart = await CartDao.getCartById(idCart)
        const orders = await this.getOrders()
        const lastOrder = orders.at(-1) 
        let incNumberOrder; 
        
        if(orders.length !== 0 ){
            incNumberOrder = lastOrder.numberOrder + 1
        } else {
            incNumberOrder = 1
        }
        
        const generate = await OrderDao.generateOrder(cart,order, incNumberOrder)
        await sendMail(generate)
        // await CartDao.deleteCartById(idCart) 
        
        return generate
    }
    async deleteOrderById(idOrder){
        const deleteOrder = await OrderDao.deleteOrderById(idOrder)
        return deleteOrder
    }
    async deleteAll(){
        const deleteAll = await OrderDao.deleteAll()
        return deleteAll
    }

}

export default new OrderServices()