import express from 'express'
import {productsManager} from "./dao/productsManager.js"

const PORT = 8080
const app = express()

const rutaData = "./src/data/products.json" 
const productManager = new productsManager(rutaData)

app.get("/", (req, res) => {
    res.send("Bienvenido al servidor, vaya a /products para ver todos nuestros productos")
})

app.get('/products', async (req, res) => {
    let products = await productManager.getProducts()

    let {limit} = req.query
    if(limit){
        products = products.slice(0, limit)
    }
})

app.get('/products/:id', async (req, res) => {
    let products = await productManager.getProducts()
    
    let id = req.params.id
    console.log(id)
    if(id){
        products = products.filter(product => product.id === parseInt(id))
        if(products.length > 0){
            res.send(products)
        } else {
            res.status(404).send('El producto que buscas no existe')
        }
    }
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})