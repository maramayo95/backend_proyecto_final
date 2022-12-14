import { validationResult } from "express-validator/src/validation-result.js";

export const validateResult = (req,res,next) => {
    try {
        validationResult(req).throw()
        return next()        
    } catch (error) {
        res.status(404)
        res.send({errors: error.array()})
    }
}