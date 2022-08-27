import Message from '../models/messages.models.js'

class MessageDaos{
    async saveMessage(data){
        const save = await Message.create({
            date: Date.now(),
            email: 'tusanga@tusanga.com',
            body: data
        })
    }
    async getMessages(){
        const messages = await Message.find()
        return messages
    }
    async getMessagesByEmail(email){
        const messages = await Message.find({email:email})
        return messages
    }
}

export default new MessageDaos()