import mongoose from 'mongoose'
import app from './app/app.js'
import express from 'express'
import {Server as HttpServer} from 'http'
import {Server as  IOServer} from 'socket.io'
import 'dotenv/config'
import MessageController from './app/controller/message.controller.js'
import jwt from 'jsonwebtoken'
import messageServices from './app/service/message.services.js'

const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)


io.on('connection', (socket) => {

        socket.emit('server-message', 'Este es mi mensaje desde el servidor')
        socket.on('client-message', data => {
          try {
              if(!data.token) throw new Error()
              const payload = jwt.verify(data.token, process.env.PRIVATE_KEY);
              messageServices.saveMessage(payload.email, data.message)

             } catch (err) {
              socket.emit('server-message' , 'ERROR: Por favor inicia sesion ')
            }

        })
    })
  

const PORT = process.env.PORT || 8080
const urlBase = process.env.DB

mongoose.connect(urlBase)

app.use( express.static('public'));

console.log(PORT, 'Este es el puerto')

httpServer.listen(PORT, () => console.log(`http://localhost:${PORT}/login`))
