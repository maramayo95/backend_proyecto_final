import Message from '../daos/Message.daos.js'

class MessageServices{
    async saveMessage(email, message){
        const save = await Message.saveMessage(email, message)
        return save
    }
    async getMessages(){
        const messages = await Message.getMessages()
        return messages
    }
    async getMessagesByEmail(email){
        const messages = await Message.getMessagesByEmail(email)
        return messages
    }
}

export default new MessageServices()