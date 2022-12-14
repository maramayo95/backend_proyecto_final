import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
    ,
    category: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    } ,
    image: {
        type: String,
        required: true
       
    }, price: {
        type: Number,
        required: true
    }, stock: {
        type: Number,
        required: true
    }, quantity: {
        type:Number
    }
})


const Product = mongoose.model('products', ProductSchema)

export default Product