export const authMiddleware = (req, res, next) => {
    let { user, password } = req.query;
    
    if (user != 'admin' && password != 'admin') {
        res.setHeader('Content-Type', 'application/json');
        return res.status(401).send({error: 'Crecenciales incorrectas'});
    }

    next()
}