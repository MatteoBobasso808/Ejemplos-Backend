const crypto = require('crypto')
const fs = require('fs')
const SECRET =  "CoderCoder123"
// fs.readfile

class userManager{
    static #usuarios = []

    static getUsuarios(){
        return this.#usuarios
    }

    static #generaHash(password){
        return crypto.createHmac("sha256", SECRET).update(password).digest("hex")
    }

    static addUser(nombre, email, password){
        if(!nombre || !email || !password){
            console.log('Complete los datos')
            return
        }
        
        let regExIncluyeNumeros = /[0-9]/
        if(regExIncluyeNumeros.test(nombre) || nombre.trim().length == 0){
            console.log(`el nombre "${nombre}" no puede contener números ni estar vacío`)
            return
        }

        let regExEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/
        if(!regExEmail.test(email)){
            console.log(`Email inválido: ${email}`)
            return
        }

        let existe = this.#usuarios.find(d=> d.email == email)
        if(existe){
            console.log(`El email ${email} ya existe en db, con id ${existe.id}`)
            return
        }


        let id = 0
        if(this.#usuarios.length > 0){
            id = Math.max(...this.#usuarios.map(d=> d.id)) + 1
        }

        password = this.#generaHash(password)

        let nuevoUser = {
            id,
            nombre,
            email,
            password
        }

        this.#usuarios.push(nuevoUser)
        return nuevoUser
    }

    static login(email, password){
        password = this.#generaHash(password)

        let usuario = this.#usuarios.find(d=> d.email == email && d.password == password)
        if(!usuario){
            console.log('Credenciales Incorrectas')
            return
        }

        console.log(`Bienvenido ${usuario.nombre}`)
    }
}

userManager.addUser("Juan", "juan@test.com", "1234") // bien
userManager.addUser("Tomas", 'tomi@test.com', '4567') // bien 
userManager.addUser("Tomas1", 'tomi@test.com', '1234') // mal, nombre con num
userManager.addUser("Tomas", 'tomitest.com', '1234') // mal, email inválido
userManager.addUser("Tom", 'tomi@test.com', '1234') // mal, email ya existe

console.log(userManager.getUsuarios())

userManager.login('carlos@test.com', '1234') // mal, credenciales incorrectas
userManager.login('tomi@test.com', '4567') // bien
userManager.login('tomi@test.com', '999') // mal, credenciales incorrectas