import mongoose from 'mongoose'

const CartSchema = new mongoose.Schema({
    email: String,
    date: Date,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'products' }], //Como agrego las cantidades
    adress: String,

})

const Cart = mongoose.model('cart', CartSchema)

export default Cart