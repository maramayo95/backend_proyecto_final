import User from "../models/user.models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class Auth {
  async register(req, res) {
    try {
      const salt = await bcrypt.genSalt(10);

      const password = req.body.password;
      const passwordVerification = req.body.passwordVerification;

      if (password === passwordVerification) {
        const passwordHash = await bcrypt.hash(password, salt);
        return passwordHash;
      }

      const userExist = await User.findOne({ email: req.body.email });

      if (userExist) throw new Error("El usuario no se encuentra registrado");

      const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
      });

      res.send(newUser);
    } catch (error) {
      res.send(error.message);
    }
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
