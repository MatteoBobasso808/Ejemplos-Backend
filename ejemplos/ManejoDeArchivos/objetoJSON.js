const fs = require("fs")
let ruta = "./archivos/heroes.json"
let heroes = [
    {
        id: 0,
        nombre: "Batman",
        poder: "Dinero"
    },
    {
        id: 1,
        nombre: "Superman",
        poder: "Super fuerza"
    },
    {
        id: 2,
        nombre: "Flash",
        poder: "Velocidad"
    }
]

const replacer = (clave, valor) => {
    if (clave === "nombre") {
        return valor.toUpperCase()
    }
    return valor
}

fs.writeFileSync(ruta, JSON.stringify(heroes, replacer, "\t"))

let data = JSON.parse(fs.readFileSync(ruta, {encoding: "utf-8"}))
console.log(data)

setTimeout(() => {
    fs.unlinkSync(ruta)
    console.log("Archivo eliminado.")
}, 2000) // 2000 milisegundos = 2 segundos