import {createTransport} from 'nodemailer'

const sendMail = async (order) => {
    console.log(order)
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
        to : process.env.MAILITO,
        subject : 'Comprobante de Compra',
        html: order
    }
  
    await transporter.sendMail(mailOptions)
    
    }

    export default sendMail