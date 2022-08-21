import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
    date: Date,
    cart: []

})

const Order = mongoose.model('orders', OrderSchema)

export default Order

// reveer bien que pide la consigna