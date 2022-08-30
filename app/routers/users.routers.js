import {Router} from 'express'
import UsersController from '../controller/users.controller.js'

const routeUser = Router()

routeUser.get('/' , UsersController.getUsers )
routeUser.delete('/:id', UsersController.deleteOneUser)
routeUser.delete('/',  UsersController.deleteAll )
routeUser.put('/:id', UsersController.updateUser )



export default routeUser