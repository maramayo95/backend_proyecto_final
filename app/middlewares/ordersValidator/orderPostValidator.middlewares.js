import { check } from 'express-validator'
import { validateResult } from '../../helpers/productValidator/productValidatorPost.helper.js'


export const orderPostValidator = [ 
    check('email')
        .exists()
        .isString()
        .not()
        .isEmpty()
        .withMessage('This field must be complete'),
    check('adress')
        .exists()
        .isString()
        .not()
        .isEmpty()
        .withMessage('This field must be complete'),
    ,
    (req,res,next) => {
        validateResult(req,res,next)
    }
]