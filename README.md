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


# Installacion

Instalar todas las dependencias.

```bash
npm i 
```

# Ejecución del proyecto
```bash
npm run dev
```

# Variables de Entorno

```bash
 DB= Clave de mongo atlas

PRIVATE_KEY=secret

NODEMAILERPASS= Contraseña autorización de gmail
MAILBOT= Mail que envia notificacion de registro de usuarios y ordenes de compra

MAILTO= Email al cual van a ser enviadas las notificaciones
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
 /carrito/:idCart
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

#### DELETE: /:idCart/producto/:idProduct
Elimina un productos del carrito

```bash
 /carrito/:idCart/producto/:idProduct
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
Agrega un carrito y genera una orden. Cuando se efectua la orden elimina el carrito existente
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


## /user
#### GET: "/" 
Traer a todos los usuarios
```bash
 /user/
```

#### GET: /:id 
Traer usuario por id
```bash
 /user/:id
```


#### DELETE: /:id Elimina una orden por id 
```bash
 /user/:id
```

#### DELETE: /
Elimina a todos los usuarios
```bash
 /user/
```


## /chat
#### POST: "/" 
Guarda un mensaje en una base de datos
```bash
 /chat/
```

#### GET: "/"
Traer todos los mensajes
```bash
 /chat/
```

#### GET: "/:email"
Trae los mensajes filtrados por email 
```bash
 /chat/:email
```

## /auth
#### POST: "/register" 
Registra un usuario y lo almacena en la base de datos
```bash
 /auth/register
```

#### POST: "/login"
Loguea un usuario
```bash
 /auth/login
```

## Protección de rutas
Todas las rutas se encuentran protegidas. Para poder acceder se debe registrar el usuario y de esa forma se le brindara un token que se deberá incorporar vía header y eso le permitirá acceder a las rutas que desee el usuario. 
El header se debe mandar como : Authorization : token

# Modelos
Aclaracion : Si bien el proyecto decía que en carrito debían almacenarse dirección y email. Decidi dejar esos datos en el modelo de ordenes como un campo requerido dado que consideré que en las ordenes debía hacerse el checkout de productos. 

## Products
Modelo de productos hecho en Mongo DB

```bash
     name: {
        type: String,
        required: true
    }
    ,
    category: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    } ,
    image: {
        type: String,
        required: true
       
    }, price: {
        type: Number,
        required: true
    }, stock: {
        type: Number,
        required: true
    }, quantity: {
        type:Number
    }
}
```

## Cart
Modelo de carrito hecho en Mongo DB

```bash
{
    date: {
        type:Date,
    } ,
    products: [], 
}
```

## Order
Modelo de ordenes hecho en Mongo DB

```bash
{
    date: Date,
    products: [],
    numberOrder:{
      type: Number,
    } ,
    status:{
        type: String,
        default: "generada"
    }, 
    email: {
      type: String,
      required:true
      },
    adress: {
      type: String,
      required: true
  } 

}
```

## User
Modelo de usuarios hecho en Mongo DB

```bash
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
```

## Message

```bash
{
    date : Date,
    email: {
        type: String,
        required: true
    },
    body: {
        type:String,
        required: true
    }
}

```


