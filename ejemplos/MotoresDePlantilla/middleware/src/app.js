import express from 'express';
import { loggerMiddleware } from './middleware/logger.js';
import { authMiddleware } from './middleware/auth.js';
import {router as ProductosRouter } from './routes/productsRouter.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware); // middleware a nivel aplicacion

app.use('/api/productos', ProductosRouter);

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
});

app.get('/heroes', authMiddleware, (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    return res.status(200).json({user:{
        name: req.query.user,
        rol: req.rol
    }});
})

app.listen(PORT, () => {
    console.log('Server on port ' + PORT);
});