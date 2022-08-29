import mongoose from 'mongoose'
import app from './app/app.js'
import express from 'express'
import {Server as HttpServer} from 'http'
import {Server as  IOServer} from 'socket.io'
import 'dotenv/config'
import MessageController from './app/controller/message.controller.js'

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)


io.on('connection', (socket) => {
    // "connection" se ejecuta la primera vez que se abre una nueva conexión
      console.log('Usuario conectado')
    // Se imprimirá solo la primera vez que se ha abierto la conexión    
        socket.emit('mi mensaje', 'Este es mi mensaje desde el servidor')
        socket.on('new-message', data => {
        MessageController.saveMessage(data)
        })
    })
  

const PORT = process.env.PORT || 8080
const urlBase = process.env.DB

mongoose.connect(urlBase)

app.use( express.static('public'));

console.log(PORT, 'Este es el puerto')

httpServer.listen(PORT, () => console.log(`http://localhost:${PORT}/auth/register`))
