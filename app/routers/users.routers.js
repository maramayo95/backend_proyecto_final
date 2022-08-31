import {Router} from 'express'
import UsersController from '../controller/users.controller.js'
import verifyToken from '../middlewares/auth/auth.middleware.js'

const routeUser = Router()

routeUser.get('/' , verifyToken,  UsersController.getUsers )
routeUser.get('/:id' , verifyToken, UsersController.getUsersById )
routeUser.delete('/:id', verifyToken, UsersController.deleteOneUser)
routeUser.delete('/', verifyToken,  UsersController.deleteAll )
routeUser.put('/:id', verifyToken, UsersController.updateUser )



export default routeUser