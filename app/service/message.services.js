import Message from '../daos/Message.daos.js'

class MessageServices{
    async saveMessage(data){
        const save = await Message.save(data)
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