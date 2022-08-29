import mongoose from 'mongoose'

const OrderSchema = new mongoose.Schema({
    date: Date,
    products: [],
    numberOrder:{
      type: Number,
    } ,
    status:{
        type: String,
        default: "generada"
    }, 
    email: {type: String,
      required:true
      },
    adress:{
      type: String,
      required: true
  } 

})
const Order = mongoose.model('orders', OrderSchema)

export default Order

