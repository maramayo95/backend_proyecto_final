import {Router} from 'express'
import messageController from '../controller/message.controller.js'

const routeMessages = Router()


routeMessages.post('/' , messageController.saveMessage)
routeMessages.get('/', messageController.getMessages)
routeMessages.get('/:email', messageController.getMessagesByEmail)

export default routeMessages