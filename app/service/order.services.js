import OrderDao from "../daos/Orders.daos.js"

class OrderServices {
    async generateOrder(idCart){
        const generate = await OrderDao.generateOrder(idCart)
        return generate
    }
}

export default new OrderServices()