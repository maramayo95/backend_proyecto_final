import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    email: String,
    phone: String,
    image: String,
    username: String,
    password: String
})


const User = mongoose.model('users', usersSchema)

export default User