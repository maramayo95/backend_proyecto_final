import mongoose from 'mongoose'

const messagesSchema = new mongoose.Schema({
    email: String,
    date : Date,
    body: String
})

const Message = mongoose.model('messages', messagesSchema)

export default Message