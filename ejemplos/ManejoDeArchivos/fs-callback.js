const fs = require("fs")

let ruta = "./archivos/texto01.txt"

let texto1 = "Hola a todos."

fs.writeFile(ruta, texto1, (error) => {
    if(error){
        console.log("No se pudo crear el archivo.")
        return
    }
    console.log("Archivo creado.")

    fs.readFile(ruta, {encoding: "utf-8"}, (error, info) => {
        if(error){
            console.log("No se pudo leer el archivo.")
            return
        }
        console.log(info)
        fs.appendFile(ruta, "\n\n\t¿Cómo están?", (error) => {
            if(error){
                console.log("No se pudo agregar texto al archivo.")
                return
            }
            console.log("Texto agregado.")
            setTimeout(() => {
                fs.unlink(ruta, (error) => {
                    if(error){
                        console.log("No se pudo eliminar el archivo.")
                        return
                    }
                    console.log("Archivo eliminado.")
                })
            }, 2000)
        })
    })
})
