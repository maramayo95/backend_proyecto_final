import {Router} from 'express'

const routeCart = Router()

routeCart.get('/', (req,res) => {
    res.send("Hola")
})


export default routeCart