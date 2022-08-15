import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
    date: Date,
    cart: [{ type: Schema.Types.ObjectId, ref: 'cart' }]

})

const Order = mongoose.model('orders', OrderSchema)

export default Order

// reveer bien que pide la consigna