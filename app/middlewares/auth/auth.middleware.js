import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.get('Authorization')
    // const token = req.query.token;

    // if the cookie is not set, return an unauthorized error
    if (!token) {
         res.status(403).send('El usuario no está autenticado');
         return
    }

    try {
       jwt.verify(token, process.env.PRIVATE_KEY);
        next();
    } catch (err) {
        return res.status(500).send(err);
    }
};


export default verifyToken;