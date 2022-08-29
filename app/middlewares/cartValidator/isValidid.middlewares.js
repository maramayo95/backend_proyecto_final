import { check} from 'express-validator'
import {validateResult} from '../../helpers/cartValidator/isValidId.helper.js'

export const isValidIdCart = [
    check('idCart')
    .exists()
    .withMessage('You have tu add an Cart request id ')
    .isString()
    .withMessage('Must be an String')
    .isLength({min:24, max:24})
    .withMessage('must be 24 chars'),
    (req,res,next) => {
        validateResult(req,res,next)
    } 
]