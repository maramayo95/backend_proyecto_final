import {Router} from 'express'
import ProductController from '../controller/products.controller.js'
import { productPostValidate } from '../middlewares/productValidator/productValidationPost.middlewares.js'
import {isValidId} from '../middlewares/productValidator/isValidId.js'


const routeProduct = Router()

routeProduct.get('/', ProductController.listProducts )
routeProduct.post('/', productPostValidate,  ProductController.saveProducts )
routeProduct.get('/:id', isValidId, ProductController.getOneProduct)
routeProduct.get('/categoria/:categoria',  ProductController.findCategory)
routeProduct.delete('/:id', isValidId ,ProductController.deleteProduct) //validate category
routeProduct.put('/:id', isValidId, productPostValidate, ProductController.updateProduct )
    

export default routeProduct