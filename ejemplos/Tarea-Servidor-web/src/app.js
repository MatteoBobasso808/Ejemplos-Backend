import express from 'express'
import {productsManager} from "./dao/productsManager.js"

const PORT = 8080
const app = express()

const rutaData = "./src/data/products.json" 
const productManager = new productsManager(rutaData)

app.get("/", (req, res) => { // Funcion handler de la ruta '/'
    res.send("Bienvenido al servidor, vaya a /products para ver todos nuestros productos")
})

app.get('/products', async (req, res) => { // Funcion handler de la ruta '/products'
    let products = await productManager.getProducts()

    let {limit} = req.query
    if(limit){
        products = products.slice(0, limit)
    }
})

app.get('/products/:id', async (req, res) => { // Funcion handler de la ruta '/products/:id'
    let products = await productManager.getProducts()
    
    let {id} = req.params
    id = Number(id)

    if(isNaN(id)){
        res.setHeader('Content-Type', 'application/json')
        return res.status(400).send({error: 'El id debe ser un número'})
    }

    products = products.find(product => product.id === id)
    if(!products){
        res.setHeader('Content-Type', 'application/json')
        return res.status(404).send({error: 'El producto que buscas no existe'})
    }

    res.status(200).send(products)
})

app.get('/product/:name', async (req, res) => { // Funcion handler de la ruta '/product/:name'
    let products = await productManager.getProducts()

    let {name} = req.params

    products = products.find(product => product.name.toLowerCase() === name.trim().toLowerCase())
    if(!products){
        res.setHeader('Content-Type', 'application/json')
        return res.status(404).send({error: 'El producto que buscas no existe'})
    }

    res.status(200).send(products)
})

app.listen(PORT, () => { // Funcion para levantar el servidor
    console.log("Servidor corriendo en el puerto " + PORT)
})