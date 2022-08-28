import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
    date: Date,
    products: [],
    numberOrder: Number,
    status:{
        type: String,
        default: "generada"
    }, 
    email: String

})

const Order = mongoose.model('orders', OrderSchema)

export default Order

