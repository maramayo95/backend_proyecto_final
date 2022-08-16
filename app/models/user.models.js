import mongoose from 'mongoose'

const usersSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    password: String,
    passwordVerification: String
})


const User = mongoose.model('users', usersSchema)

export default User