import express, { json, urlencoded } from 'express'
import routeAuth from './routers/auth.routers.js'
import routeCart from './routers/cart.routers.js'
import routeProduct from './routers/products.routers.js'
import routeMessages from './routers/messages.routers.js'
import routeOrder from './routers/orders.routers.js'
import * as path from 'path'

const app = express()

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(json())
app.use(urlencoded({extended:true}))

app.get('/login', (_,res) => { 
    const loginPath = path.join(__dirname, '..', 'public', 'login.html')
    res.sendFile(loginPath)
    return
})
app.get('/', (_,res) => { 
    const chatPath = path.join(__dirname, '..', 'public', 'index.html')
    res.sendFile(chatPath)
    return
})


// app.use routers
app.use('/productos', routeProduct)
app.use('/carrito', routeCart)
app.use('/auth', routeAuth)
app.use('/chat', routeMessages)
app.use('/orders', routeOrder)

export default app