import Auth from '../daos/Auth.daos.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthService {
    async registerService(user){
      
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        const userExist = Auth.findUserByEmail(user.email)
        
        if(!userExist){
            const createUser = await Auth.register(user)
            return createUser
        } else {
            throw new Error('El usuario ya existe')
        }

        return createUser
        
    }
    async loginService(){

    }

}

export default new AuthService()