const fs = require("fs")
let ruta = "./archivos/Usuarios.json"

class usuariosManager{
    #path=""

    constructor(ruta){
        this.#path=ruta
    }

    async getUsuarios(){
        if(fs.existsSync(this.#path)){
            return JSON.parse(await fs.promises.readFile(this.#path, {encoding: "utf-8"}))
        } else{
            throw new Error("El archivo no existe.")
        }
    }

    async addUsuario(nombre, email){
        if(!nombre || !email){
            console.log("Nombre y email son requeridos")
            return
        }

        let usuarios = await this.getUsuarios()
        
        let id = 1
        if(usuarios.length > 0){
            id = Math.max(...usuarios.map(d => d.id)) + 1
        }

        let existe = usuarios.find(u=>u.email === email)
        if(existe){
            console.log(`Usuario con email ${email} ya existe`)
            return   
        }
        
        let nuevoUsuario = {id, nombre, email}
        usuarios.push(nuevoUsuario)
        await fs.promises.writeFile(this.#path, JSON.stringify(usuarios, null, 2))
    }
}

const ejercicio = async () => {
    const usuarioManager = new usuariosManager(ruta)
    let usuarios = await usuarioManager.getUsuarios()
    console.log(usuarios)

    await usuarioManager.addUsuario("Juan", "juan@test.com")
    await usuarioManager.addUsuario("Juan", "juan@test.com")
    await usuarioManager.addUsuario("pedro", "pedro@test.com")

    usuarios = await usuarioManager.getUsuarios()
    console.log(usuarios)
}

ejercicio()