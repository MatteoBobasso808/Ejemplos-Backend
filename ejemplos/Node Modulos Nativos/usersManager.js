const crypto = require('crypto')
const fs = require('fs')

// fs.readfile



class userManager{
    static #usuarios = []

    static getUsuarios(){
        return this.#usuarios
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

        let nuevoUser = {
            id,
            nombre,
            email,
            password
        }

        this.#usuarios.push(nuevoUser)
        return nuevoUser
    }
}

userManager.addUser("Juan", "juan@test.com", "1234")
userManager.addUser("Tomas", 'tomi@test.com', '1234')
userManager.addUser("Tomas1", 'tomi@test.com', '1234')
userManager.addUser("Tomas", 'tomitest.com', '1234')
userManager.addUser("Tom", 'tomi@test.com', '1234')

console.log(userManager.getUsuarios())