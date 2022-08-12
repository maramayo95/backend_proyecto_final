import { check} from 'express-validator'
import { validateResult } from '../../helpers/productValidator/productValidatorPost.helper.js'

 export const productPostValidate = [ 
    check('name')
        .isString()
        .withMessage('must be a string'),
    check('category')
        .isString()
        .withMessage('Must be a string')
    ,
    check('description')
        .isString()
        .withMessage('must be a string'),
    check('image')
        .isString()
        .withMessage('must be a string'),
    check('price')
        .isNumeric()
        .withMessage('must be a number'),
    check('stock')
        .isNumeric()
        .withMessage('must be a number'),
    (req,res,next) => {
        validateResult(req,res,next)
    }
]