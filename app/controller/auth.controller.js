import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";



class Auth {
  constructor(){
    this.tokenAge = (30 * 24 * 60 * 60) // 30 days
  }
  async register(req, res) {
    try {
      
      const password = req.body.password;
      const passwordVerification = req.body.passwordVerification;
      
      //Services
      
      
      if (password !== passwordVerification) {
        res.status(400).send("Las contraseñas no coinciden")
      }
      const salt = await bcrypt.genSalt(10);
      const passwordHash = await bcrypt.hash(password, salt);
      //DAO?

      const userExist = await User.exists({ email: req.body.email });

      if (userExist) {
        res.status(400).send("El usuario ya existe")
      } 
      
      
      const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: passwordHash,
      });

      const data = {
        name: user.name,
        password: user.password,
      };
      const token = jwt.sign(data, process.env.PRIVATE_KEY);

      res.cookie("token", token, { maxAge: this.tokenAge })
      res.send(token)
    } catch (error) {
      res.send(error);
    }
  }
  async login(req, res) {
    const user = await User.findOne({ email: req.body.email });

    if(!user){
      res.status(400).send("Revise si el usuario y la contraseña son correctos")
    }

    const passwordsMatch = await bcrypt.compare(req.body.password,user.password)

    if(!passwordsMatch){
      res.status(400).send("Revise si el usuario y la contraseña son correctos")
    }

    const data = {
      email: user.email,
      password: user.password,
    };
    const token = jwt.sign(data, process.env.PRIVATE_KEY);
    res.cookie("token", token, { maxAge: this.tokenAge })
    res.send("El usuario se ha logueado satisfactoriamente")
  }
}

export default  new Auth();
