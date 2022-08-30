import mongoose from 'mongoose'

const CartSchema = new mongoose.Schema({
    date: {
        type:Date,
    } ,
    products: [], 
})

const Cart = mongoose.model('cart', CartSchema)

export default Cart