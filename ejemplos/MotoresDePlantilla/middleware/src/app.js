import express from 'express';
import { loggerMiddleware } from './middleware/logger.js';
import { authMiddleware } from './middleware/auth.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(loggerMiddleware); // middleware a nivel aplicacion


app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
});

app.get('/heroes', authMiddleware, (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send('OK');
})

app.listen(PORT, () => {
    console.log('Server on port ' + PORT);
});