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

// 5*4 + 3*3
const calculo = async ()=>{
    try{
        let resultado1 = await multiplica(5,4);
        let resultado2 = await multiplica(3,3);
        let resultado = await suma(resultado1,resultado2);

        return resultado;
    } catch (error){
        console.log(error.message);
    }
}

calculo()
    .then(res=>console.log(res))
    .catch(e=>console.log(e.message))

// Consulta api
const getApi = async (url="")=>{
    try{
        let response = await fetch(url)
        return await response.json()
    } catch (error){
        console.log(error.message)
    }
}

listarUsuarios= async ()=>{
    let usuarios = await getApi('https://jsonplaceholder.typicode.com/posts')
    console.log(usuarios)
}

listarUsuarios()