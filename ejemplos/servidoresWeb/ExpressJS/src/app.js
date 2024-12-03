const express = require('express')
const PORT = 3000
const app = express()

app.get('/', (req, res) => {
    res.send('Server realizado en Express (en lugar de usar módulo HTTP...)')
})

app.get('/text', (req, res) => {
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')  
    res.send('esto es un texto plano')
})

app.get('/contacto', (req, res) => {
    res.send('<h2 style=color:blue;> Página de Contacto </h2>')
})

app.get("/heroes", (req, res) => {
    let heroes = [
        {nombre: "Batman", profesion: "Millonario", edad: 30},
        {nombre: "Superman", profesion: "Periodista", edad: 35},
        {nombre: "Flash", profesion: "Forense", edad: 25},
        {nombre: "Mujer Maravilla", profesion: "Diosa", edad: 100},
        {nombre: "Linterna Verde", profesion: "Piloto", edad: 32}
    ]
    res.send(heroes)
})

app.get("*", (req, res) => {
    res.send("Error 404 - Página no encontrada")
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
