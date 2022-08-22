import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthService from "../service/auth.services.js";

class Auth {
  async register(req, res) {
    // try {
    //   const {password, passwordVerification , name, phone} = req.body

      
    //   //Services
    //   const salt = await bcrypt.genSalt(10);
      
    //   if (password === passwordVerification) {
    //     const passwordHash = await bcrypt.hash(password, salt);
    //     return passwordHash;
    //   }

    //   //DAO?

    //   const userExist = await User.findOne({ email: req.body.email });

    //   if (userExist) throw new Error("El usuario no se encuentra registrado");

    //   const newUser = await User.create({
    //     name: name,
    //     email:email,
    //     phone: phone,
    //     password: password,
    //   });

    //   res.send(newUser);
    // } catch (error) {
    //   res.send(error.message);
    // }
    
    const newUser = req.body
    const  user = await AuthService.registerService(newUser)
    res.send(user)

  }
  async login(req, res) {
    const user = await User.findOne({ email: req.body.email });

    if (user) {
      const equalsPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (equalsPassword) {
        const data = {
          name: user.name,
          password: user.password,
        };
        const token = jwt.sign(data, process.env.PRIVATE_KEY);
        res.send({ data, token });
      } else {
        res.send("Reescriba sus datos");
      }
    } else {
      res.send("Los campos no coinciden ");
    }
  }
}

export default  new Auth();
