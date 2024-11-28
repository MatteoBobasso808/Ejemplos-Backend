const fs = require("fs")

let ruta = "./archivos/archivoPromesas.txt"
let texto3 = "Hola, soy un texto de prueba."

/* Callback Hell
fs.promises.writeFile(ruta, texto3)
.then(() => {
    console.log("Archivo creado.")
    fs.promises.readFile(ruta, {encoding: "utf-8"})
        .then((data) => {
            console.log(data)
            fs.promises.appendFile(ruta, "\n\n\t¿Cómo están?")
                .then(() => {
                    console.log("Texto agregado.")
                })
                .catch((error) => {
                    console.error(error.message)
                })
        })
        .catch((error) => {
            console.error(error.message)
        })
})
.catch((error) => {
    console.error(error.message)
})

fs.promises.writeFile(ruta, texto3)
    .then(() => {
        console.log("Archivo creado.")
        return fs.promises.readFile(ruta, {encoding: "utf-8"})
    })
    .then((data) => {
        console.log(data)
        return fs.promises.appendFile(ruta, "\n\n\t¿Cómo están?")
    })
    .then(() => {
        console.log("Texto agregado.")
    })
    .catch((error) => {
        console.error(error.message)
    })
*/

// Async/Await
let archivos = async () => {
    try {
        await fs.promises.writeFile(ruta, texto3)
        console.log("Archivo creado.")
        let data = await fs.promises.readFile(ruta, {encoding: "utf-8"})
        console.log(data)
        await fs.promises.appendFile(ruta, "\n\n\t¿Cómo están?")
        console.log("Texto agregado.")
        let data2 = await fs.promises.readFile(ruta, {encoding: "utf-8"})
        console.log(data2)
        setTimeout(async() => {
            await fs.promises.unlink(ruta)
            console.log("Archivo eliminado.")
        }, 2000)
    } catch (error) {
        console.error(error.message)
    }
}

archivos()