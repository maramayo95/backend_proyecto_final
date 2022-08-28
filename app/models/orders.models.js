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
    email: String

})
const Order = mongoose.model('orders', OrderSchema)

// OrderSchema.pre("save", (next) => {
//     Order.findByIdAndUpdate({_id : "entityId" }, {$inc: {numberOrder: 1}}, (err)=> {
//         if (err) return next(err)
//         next()
//     } )
// })  
export default Order

