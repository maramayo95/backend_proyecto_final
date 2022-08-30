import UserServices from "../service/user.services.js"

class UsersController {
    async getUsers(req,res){
        try {
            const getUsers = await UserServices.getUsers()
            res.send(getUsers)
        } catch (error) {
            res.status(404).send("No hay productos en la base de datos")
            return
        }
    }
    async getUsersById(req,res){
        try {
            const id = req.params.id
            const getUsers = await UserServices.getUsersById(id)
            res.send(getUsers)
        } catch (error) {
            res.status(404).send("No hay productos en la base de datos")
            return
        }
    }
    async deleteOneUser(req,res){
        try {
            const id = req.params.id
            const deleteOneUser = await UserServices.deleteOneUser(id)
            res.send(deleteOneUser).status(201) 
        } catch (error) {
            res.status(404).send("No se ha encontrado el producto")
            return 
        }
    }
    async deleteAll(req,res){
        try {
            const deleteAll = await UserServices.deleteAll()
            res.send(deleteAll)
        } catch (error) {
            res.status(404).send("No hay productos en la colección")
            return 
        }
    }
    async updateUser(req,res){
        try {
            const id = req.params.id
            const updateUser = await UserServices.updateUser(id)
            res.send(updateUser)
        } catch (error) {
            res.status(404).send("No hay productos para actualizar / Controle bien los campos a actualizar")
        }
    }

}

export default new UsersController()