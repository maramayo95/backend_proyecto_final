import express, { json, urlencoded } from 'express'
import routeAuth from './routers/auth.routers.js'
import routeCart from './routers/cart.routers.js'
import routeProduct from './routers/products.routers.js'
const app = express()


// app.set('view engine', 'ejs')
// app.set('views', __dirname + '/views/partials')

app.use(json())
app.use(urlencoded({extended:true}))

// app.use routers
app.use('/productos', routeProduct)
app.use('/carrito', routeCart)
app.use('/auth', routeAuth)

export default app