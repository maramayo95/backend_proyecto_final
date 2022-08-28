const mailTemplate = order => { 
   if(!order) return " <p>No hay productos</p>"
    const products = order.products.map(({name,price,quantity}) => `<li>${name} : $ ${price} </li>`)
    
    return  `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>Gracias por su Compra </h1>
        <h2>Numero de orden : ${order._id}</h2>
        <p>Email : ${order.email} </p>
        
        <div>
            <h3>Pedido</h3>
                <ul>
                    ${products}
                </ul>
        </div>
    </body>
    </html>`
}

export default mailTemplate
