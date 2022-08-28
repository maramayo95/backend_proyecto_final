import {createTransport} from 'nodemailer'
import templateMail from './templateMail.js'

const sendMail = async (order) => {
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
        subject : 'Comprobante de Compra',
        html: templateMail(order)
    }
  
    await transporter.sendMail(mailOptions)
    
    }

    export default sendMail