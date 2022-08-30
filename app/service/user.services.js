import UsersDaos from "../daos/Users.daos.js"

class UserServices {
    async save(body, passwordHash){
            const {name, phone, email} = body
            const save = await UsersDaos.save(name, phone, email, passwordHash)
            return(save)
       
    }   
    async getUsers(){
            const users = await UsersDaos.getUsers()
            return users
    }
    async deleteOneUser(id){
          const deleteUser = await UsersDaos.deleteOneUser(id)
          return deleteUser
    }
    async deleteAll(){
        const deleteAll = await UsersDaos.deleteAll()
        return deleteAll
    }
    async updateUser(id){
        const update = await UsersDaos.update(id)
        return update
    }
}

export default new UserServices()