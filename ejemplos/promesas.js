const suma=(a,b)=>{
    return new Promise((res,rej)=>{ // resolve y reject
        if(typeof a !== 'number' || typeof b !== 'number'){
            rej(new Error('Los valores deben ser números'));
        }
        res(a+b);
    });
}

const multiplica=(a,b)=>{
    return new Promise((res,rej)=>{ // resolve y reject
        if(typeof a !== 'number' || typeof b !== 'number'){
            rej(new Error('Los valores deben ser números'));
        }
        res(a*b);
    });
}

suma(2,3)
    .then(res => {
        return `El resultado es ${res}`; 
    })
    .then(res2 => {
        return res2.toUpperCase();
    })
    .then(resFinal => {
        console.log(resFinal);
    })
    .catch(error => {
        console.error(`Error: ${error.message?error.message:error}`)
    })

// 5*4 + 3*3
let aux = 0
multiplica(5,4)
    .then(res => {
        aux = res
        return multiplica(3,3)
    })
    .then(res2 => {
        return suma(res2, aux)
    })
    .then(resFinal => {
        console.log(`El resultado es ${resFinal}`)
    })
    .catch(error => {
        console.error(error.message)
    })