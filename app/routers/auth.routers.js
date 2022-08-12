import {Router} from 'express'

//Instalar multer 


const routeAuth = Router()

routeAuth.get('/', (req,res) => {
    res.send("Hola")
})


export default routeAuth