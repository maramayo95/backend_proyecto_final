import User from "../models/user.models.js"

class UserDaos {
    async save(name,phone,email,passwordHash){
       const save = await  User.create({
        name: name,
        phone: phone,
        email: email,
        password: passwordHash
       })
       return save 
    }
    async getUsers() {
        const users = await User.find()
        return users 
    }
    async deleteOneUser(id){
        const deleteUser = await User.findByIdAndDelete({_id: id})
        return deleteUser
    }
    async deleteAll(){
        const deleteAll = await User.deleteMany({})
        return deleteAll
    }
    async update(id){
        const updateUser = await User.findByIdAndUpdate({_id: id})
        return updateUser
    }

}

export default new UserDaos()