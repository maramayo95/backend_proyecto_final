import mongoose from 'mongoose'
import app from './app/app.js'
import express from 'express'


import 'dotenv/config'


const PORT = process.env.PORT || 8080
const urlBase = process.env.DB

mongoose.connect(urlBase)

app.use( express.static('public'));

console.log(PORT, 'Este es el puerto')

app.listen(PORT, () => console.log(`http://localhost:${PORT}/auth/register`))
