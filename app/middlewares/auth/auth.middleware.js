import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    // if the cookie is not set, return an unauthorized error
    if (!token) {
        return res.status(403).send('El usuario no está autenticado');
    }

    try {
        const token = jwt.sign({ username }, jwtKey, {
            algorithm: "HS256",
            expiresIn: jwtExpirySeconds,
        });

        let auth = jwt.verify(token, jwtKey);
        res.send(`Welcome ${auth.email}!`);
    } catch (err) {
        return res.status(500).send(err);
    }
};


export default verifyToken;