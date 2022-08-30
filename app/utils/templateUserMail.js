const mailTemplate = user => { 
    console.log(user.name)
    if(!user) return " <p>No hay Usuarios</p>"
     
     
     return  `<!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta http-equiv="X-UA-Compatible" content="IE=edge">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Document</title>
     </head>
     <body>
         <h1> Nuevo Usuario Registrado </h1>
         <ul> 
            <li> Name : ${user.name} </li>
            <li> Email : ${user.email} </li>
            <li> Phone : ${user.phone} </li>
         </ul>
     </body>
     </html>`
 }
 
 export default mailTemplate