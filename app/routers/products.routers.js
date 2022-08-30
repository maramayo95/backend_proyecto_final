import {Router} from 'express'
import ProductController from '../controller/products.controller.js'
import { productPostValidate } from '../middlewares/productValidator/productValidationPost.middlewares.js'
import { isValidIdProduct } from '../middlewares/productValidator/isValidId.middlewares.js'
import verifyToken from '../middlewares/auth/auth.middleware.js'

const routeProduct = Router()

routeProduct.get('/',  ProductController.listProducts )
routeProduct.post('/', [verifyToken, productPostValidate],  ProductController.saveProducts )
routeProduct.get('/:idProduct', isValidIdProduct, ProductController.getOneProduct)
routeProduct.get('/categoria/:categoria',  ProductController.findCategory)
routeProduct.delete('/:idProduct', [verifyToken, isValidIdProduct] ,ProductController.deleteProduct) //validate category
routeProduct.delete('/delete/all', verifyToken, ProductController.deleteAll )
routeProduct.put('/:idProduct', [verifyToken, isValidIdProduct],  ProductController.updateProduct )
    

export default routeProduct