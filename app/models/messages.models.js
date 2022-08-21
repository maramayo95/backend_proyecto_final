import mongoose from 'mongoose'

const messagesSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    date : Date,
    body: {
        type:String,
        required: true
    }
})

const Message = mongoose.model('messages', messagesSchema)

export default Message