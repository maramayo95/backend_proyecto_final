import { check} from 'express-validator'
import {validateResult} from '../../helpers/productValidator/isValidId.helper.js'

export const isValidIdProduct = [
    check('idProduct')
    .exists()
    .withMessage('You have tu add an request Product id ')
    .isString()
    .withMessage('Must be an String')
    .isLength({min:24, max:24})
    .withMessage('must be 24 chars'),
    (req,res,next) => {
        validateResult(req,res,next)
    } 
]