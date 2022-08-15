import mongoose from 'mongoose'
const {Schema} = mongoose;

const ProductSchema = new Schema({
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
    }
})


const Product = mongoose.model('products', ProductSchema)

export default Product