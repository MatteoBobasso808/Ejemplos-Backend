import fs from "fs"

export class productsManager{
    #path=""

    constructor(ruta){
        this.#path=ruta
    }

    async getProducts(){
        if(fs.existsSync(this.#path)){
            return JSON.parse(await fs.promises.readFile(this.#path, {encoding: "utf-8"}))
        } else{
            throw new Error("El archivo no existe.")
        }
    }
}