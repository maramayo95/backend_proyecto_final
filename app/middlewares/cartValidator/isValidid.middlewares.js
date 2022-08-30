import { check} from 'express-validator'
import {validateResult} from '../../helpers/cartValidator/isValidId.helper.js'

export const isValidIdCart = [
    check('idCart')
    .exists()
    .withMessage('You have tu add an Cart request id ')
    .isString()
    .withMessage('Must be an String'),
    (req,res,next) => {
        validateResult(req,res,next)
    } 
]