import mongoose from 'mongoose'
import app from './app/app.js'
import 'dotenv/config'


const PORT = process.env.PORT || 8080
const urlBase = process.env.DB

mongoose.connect(urlBase)

console.log(PORT, 'Este es el puerto')

app.listen(PORT, () => console.log(`http://localhost:${PORT}/auth/register`))
