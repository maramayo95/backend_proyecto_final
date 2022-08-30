import messageServices from "../service/message.services.js"

class MessageController{
    async saveMessage(req,res){
        const {email, message} = req.body
        const save = await messageServices.saveMessage(email, message)
        return save
    }
    async getMessages(req,res){
        const messages = await messageServices.getMessages()
        res.send(messages) 
    }
    async getMessagesByEmail(req,res){{
        const email = req.params.email
        const messages = await messageServices.getMessagesByEmail(email)
        res.send(messages)
    }}
}

export default new MessageController()