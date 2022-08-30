import {createTransport} from 'nodemailer'
import templateUserMail from './templateUserMail.js'

const sendMailUser = async (user) => {
    const transporter = createTransport({
        service: 'gmail',
        port: 586,
        auth: {
            user: process.env.MAILBOT,
            pass : process.env.NODEMAILERPASS
        }
    })
    const mailOptions = {
        from: process.env.MAILBOT,
        to : process.env.MAILTO,
        subject : 'Nuevo Usuario Registrado',
        html: templateUserMail(user)
    }
  
   await transporter.sendMail(mailOptions)
    
    }

    export default sendMailUser