import User from "../models/user.models.js";

class Auth {
 async register(user) {
    const userExist  = await User.findOne()
 }
 async findUserByEmail(email){
    
 }
}

export default new Auth ()