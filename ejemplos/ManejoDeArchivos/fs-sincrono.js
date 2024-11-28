const fs = require("fs")

let ruta = "./archivos/texto01.txt"

let texto1 = "Hola a todos."

fs.writeFileSync(ruta, texto1)

if(fs.existsSync(ruta)){
    console.log("Archivo creado.")
}else{  
    console.log("No se pudo crear el archivo.")
}

let info = fs.readFileSync(ruta, "utf-8")
console.log(info)

fs.appendFileSync(ruta, "\n\n\t¿Cómo están?") // agregar al final del archivo

let info2 = fs.readFileSync(ruta, "utf-8")
console.log(info2)

setTimeout(() => { 
    fs.unlinkSync(ruta) // eliminar archivo
    console.log("Archivo eliminado.")
}, 2000); // 2000 milisegundos = 2 segundos