import {Router} from 'express'
import messageController from '../controller/message.controller.js'
import verifyToken from '../middlewares/auth/auth.middleware.js'
const routeMessages = Router()


routeMessages.post('/' , verifyToken , messageController.saveMessage)
routeMessages.get('/', verifyToken ,  messageController.getMessages)
routeMessages.get('/:email', verifyToken, messageController.getMessagesByEmail)

export default routeMessages