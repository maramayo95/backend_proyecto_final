import express, { json, urlencoded } from 'express'
import routeAuth from './routers/auth.routers.js'
import routeCart from './routers/cart.routers.js'
import routeProduct from './routers/products.routers.js'
import routeMessages from './routers/messages.routers.js'
import routeOrder from './routers/orders.routers.js'

const app = express()




app.use(json())
app.use(urlencoded({extended:true}))



// app.use routers
app.use('/productos', routeProduct)
app.use('/carrito', routeCart)
app.use('/auth', routeAuth)
app.use('/chat', routeMessages)
app.use('/orders', routeOrder)

export default app