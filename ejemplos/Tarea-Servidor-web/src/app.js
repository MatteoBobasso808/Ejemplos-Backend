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
        return res.send('El id debe ser un número')
    }

    products = products.find(product => product.id === id)
    if(!products){
        return res.send('El producto que buscas no existe')
    }

    res.send(products)
})

app.listen(PORT, () => { // Funcion para levantar el servidor
    console.log("Servidor corriendo en el puerto " + PORT)
})