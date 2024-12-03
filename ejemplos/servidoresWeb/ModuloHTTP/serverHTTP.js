const http = require("http")
const PORT = 3000 // o 8080

const server = http.createServer((req, res) => { // req: petición, res: respuesta
    if(req.url === "/heroes") {

        let heroes = [
            {nombre: "Batman", profesion: "Millonario", edad: 30},
            {nombre: "Superman", profesion: "Periodista", edad: 35},
            {nombre: "Flash", profesion: "Forense", edad: 25},
            {nombre: "Mujer Maravilla", profesion: "Diosa", edad: 100},
            {nombre: "Linterna Verde", profesion: "Piloto", edad: 32}
        ]

        res.setHeader("Content-Type", "application/json; charset=utf-8")
        return res.end(JSON.stringify(heroes, null, 2))
    }

    if(req.url === "/contacto") {
        res.setHeader("Content-Type", "text/html; charset=utf-8")
        return res.end("Pagina de contacto")
    }

    if(req.url === "/") {
        res.setHeader("Content-Type", "text/html; charset=utf-8")
        return res.end("Pagina principal")  
    }

    res.setHeader("Content-Type", "text/html; charset=utf-8")
    return res.end("error 404 | page not found")  
})

server.listen(PORT, () => {
    console.log(`Server online en el puerto ${PORT}`)
})