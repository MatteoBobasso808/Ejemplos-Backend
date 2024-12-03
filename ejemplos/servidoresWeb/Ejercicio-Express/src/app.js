import express from 'express';
import {usuariosManager} from "./dao/ManagerUsuarios.js"

const PORT = 3000
const app = express();

const rutaData = "./src/data/Usuarios.json" 
const usuarioManager = new usuariosManager(rutaData)

app.get('/', (req, res) => {
    res.send('Bienvenido al server de Express!!!');
})

app.get('/usuarios', async(req, res) => {
    let usuarios = await usuarioManager.getUsuarios()

    let {limit} = req.query
    if(limit){
        usuarios = usuarios.slice(0, limit)
    }

    let {nombre} = req.query
    if(nombre){
        usuarios = usuarios.filter(usuario => usuario.nombre === nombre)
    }

    let {email} = req.query
    if(email){
        usuarios = usuarios.filter(usuario => usuario.email === email)
    }

    res.send(usuarios)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})