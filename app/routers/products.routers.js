import {Router} from 'express'
import ProductController from '../controller/products.controller.js'
import { productPostValidate } from '../middlewares/productValidator/productValidationPost.middlewares.js'
import { isValidIdProduct } from '../middlewares/productValidator/isValidId.middlewares.js'
import verifyToken from '../middlewares/auth/auth.middleware.js'

const routeProduct = Router()

routeProduct.get('/', verifyToken,  ProductController.listProducts )
routeProduct.post('/', [verifyToken, productPostValidate],  ProductController.saveProducts )
routeProduct.get('/:idProduct', [verifyToken, isValidIdProduct], ProductController.getOneProduct)
routeProduct.get('/categoria/:categoria', verifyToken, ProductController.findCategory)
routeProduct.delete('/:idProduct', [verifyToken, isValidIdProduct] ,ProductController.deleteProduct) //validate category
routeProduct.delete('/delete/all', verifyToken, ProductController.deleteAll )
routeProduct.put('/:idProduct', [verifyToken, isValidIdProduct],  ProductController.updateProduct )
    

export default routeProduct