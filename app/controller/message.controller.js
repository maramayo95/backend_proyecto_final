import messageServices from "../service/message.services.js"

class MessageController{
    async saveMessage(req,res){
        const {email, message} = req.body
        // Desde el index.js del servidor debo conectar el controlador y de ahí hacer el resto de la ruta 
        const save = await messageServices.saveMessage(email, message)
        return save
    }
    async getMessages(req,res){
        const messages = await messageServices.getMessages()
        res.send(messages) 
    }
    async getMessagesByEmail(req,res){{
        const email = req.body.email
        const messages = await messageServices.getMessagesByEmail(email)
        res.send(messages)
    }}
}

export default new MessageController()