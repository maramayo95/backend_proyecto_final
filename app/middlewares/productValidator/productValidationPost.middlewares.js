import { check} from 'express-validator'
import { validateResult } from '../../helpers/productValidator/productValidatorPost.helper.js'

 export const productPostValidate = [ 
    check('name')
        .exists()
        .isString()
        .not()
        .isEmpty()
        .withMessage('This field must be complete'),
    check('category')
        .exists()
        .isString()
        .not()
        .isEmpty()
        .withMessage('This field must be complete'),
    check('description')
        .exists()
        .isString()
        .withMessage('must be a string')
        .not()
        .isEmpty()
        .withMessage('This field must be complete')
        , 
    check('image')
        .exists()
        .isString()
        .withMessage('must be a string')
        .not()
        .isEmpty()
        .withMessage('This field must be complete'),
    check('price')
        .exists()
        .isNumeric()
        .withMessage('must be a number')
        .not()
        .isEmpty()
        .withMessage(' must be complete')
        ,
    check('stock')
        .exists()
        .isNumeric()
        .withMessage('must be a number')
        .not()
        .isEmpty()
        .withMessage('This field must be complete'),
    (req,res,next) => {
        validateResult(req,res,next)
    }
]