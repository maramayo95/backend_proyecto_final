import mongoose from 'mongoose'

const CartSchema = new mongoose.Schema({
    email: {
        type:String,
        required: true
    },
    date: {
        type:Date,
    } ,
    products: [], 
    adress:{
        type: String,
        required: true
    } 
})

const Cart = mongoose.model('cart', CartSchema)

export default Cart