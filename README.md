# Proyecto Final Backend

El proyecto final consiste en la creación de un servidor backend orientada a la lógica de un ecommerce, login/registro y chat. 
Implemente en éste proyecto tecnologías como : 
- Node.js
- MongoDB
- Passport JWT
- Mongoose
- Bcrypt
- Websocket
- Dotenv
- Nodemailer
- Nodemon


## Installation

Instalar todas las dependencias.

```bash
npm i 
```

## Ejecución del proyecto
```bash
npm run dev
```

# Endpoints
## /producto
#### GET: "/" Traer todos los productos 

```bash
 productos/
```

#### GET: /:idProduct Traer producto por id
```bash
 productos/:idProduct
```

#### GET: /categoria/:categoria Devuelve los productos filtrados por categoria
```bash
 productos/categoria/:categoria
```

#### POST: / Agrega un producto a la base de datos
```bash
 productos/
```

#### DELETE:  /:idProduct Elimina un producto por id
```bash
 productos/:idProduct
```

#### DELETE: /delete/all Elimina todos los productos de la base de datos

```bash
 productos/delete/all
```

#### PUT /:idProduct Actualiza los productos por ID
```bash
 productos/:idProduct
```


## /carrito
#### GET: "/" 
Traer todos los productos 

```bash
 /carrito
```

#### GET: /:id 
Traer carrito por id
```bash
 /carrito/:id
```

#### POST: /  
Agrega un producto a la base de datos
```bash
 /carrito/
```

#### POST: /:idCart/producto/:idProduct/cantidad/:quantity 
Agrega un producto al carrito de compras

```bash
 /carrito/:idCart/producto/:idProduct/cantidad/:quantity
```

#### DELETE:  /:id Elimina carrito por id 
```bash
 /carrito/:id
```

#### DELETE: /:idCart/producto/:idProduct/cantidad/:quantity 
Elimina un productos del carrito

```bash
 /carrito/:idCart/producto/:idProduct/cantidad/:quantity
```

#### PUT /:idCart/producto/:idProduct/cantidad/:quantity
Actualiza los productos por ID
```bash
 /carrito/:idCart/producto/:idProduct/cantidad/:quantity
```

## /orders
#### GET: "/" 
Traer todas las ordenes 
```bash
 /orders/
```

#### GET: /:id 
Traer orden por id
```bash
 /orders/:idOrder
```

#### POST: /:idCart
Agrega un carrito y genera una orden
```bash
 /orders/:idCart
```

#### DELETE:  /:idOrder Elimina una orden por id 
```bash
 /orders/:idOrder
```

#### DELETE: /delete/all 
Elimina todas las ordenes de compras
```bash
 /orders/delete/all
```

