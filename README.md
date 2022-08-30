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

## Endpoints
### /producto
#### GET: "/" Traer todos los productos 

```bash
 "productos/"
```

#### GET: "/:idProduct Traer producto por id
```bash
 "productos/:idProduct"
```

#### GET: "/categoria/:categoria Devuelve los productos filtrados por categoria
```bash
 "productos/categoria/:categoria"
```
