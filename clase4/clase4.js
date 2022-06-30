/* 
CALLBACKS
*/

// const muro = {
//     estaConstruido:false,
//     estaAplanado:false,
//     estaPintado:false,
// }

// function construir(muroAConstruir){
//     muroAConstruir.estaConstruido = true
//     return muroAConstruir // siempre que a una función no se retorna nada, saldrá Undefined
// }

// Necesito que este aplanado

// function aplanar(muroAAplanar){
//     muroAAplanar.estaAplanado = true
//     return muroAAplanar
// }
// function pintar(muroAPintar){
//     muroAPintar.estaPintado = true
//     return muroAPintar
// }
// --> pasando copia por Referencia, hace las modificaciones, de false - true
// console.log(construir(muro)) 

// --> Valor, lo detecta como otro muro, por eso se debe guardar en una variable y después
// ocupar la variable para hacer true a estaConstruido
// los ... (Spread operator) son para pasar una copia
// Primero se declara construi y lo guardo para que pueda pasar el valor a aplanar y continuar el ciclo
// const muroConstruido = construir({...muro}) // Spread Operator :  hace una copia de un objeto o array iterable 
// const muroAplanado = aplanar(muroConstruido)
// const muroAPintado = pintar(muroAplanado)

// console.log("muroAPintado",muroConstruido) 


// El setTimeout simula asincronía 
// La funcion declara que mientras pasan los 3 segundo declarado, primero hará el console.log, por eso primero da true en todo
    // setTimeout(()=>{
    //     // console.log("hola")
    //     construir({...muro})
    //     // Si el console.log esta dentro de la función, ahora si da verdadero en construir
    //     console.log("muro", muro)
    // }, 5000)

    // console.log("muro", muro)

/* 
NUEVO EJERCICIO AHORA CON CALLBACK
*/
const muro = {
    estaConstruido:false,
    estaAplanado:false,
    estaPintado:false,
}

// function aplanar(muroAAplanar){
//     muroAAplanar.estaAplanado = true
//     return muroAAplanar
// }
// function pintar(muroAPintar){
//     muroAPintar.estaPintado = true
//     return muroAPintar
// }


    const aplanar = (muroAAplanar, pintar) => {
        muroAAplanar.estaAplanado = true
        pintar(muroAAplanar)
        return muroAAplanar
    }

    const pintar = (muroAPintar) => {
        muroAPintar.estaPintado = true
        console.log("exito", muroAPintar)
    }

    const construir = (muroAConstruir, aplanar) => {  // --> aplanar es el callback
        let error = null
        muroAConstruir.estaConstruido = true
        if(!muroAConstruir.estaConstruido){  // ! significa === false
            error = "el muro no fue construido"
            console.log("error", error)
            return
        }
             aplanar(muroAConstruir, pintar)  // --> a ejecutar  
    }


    setTimeout(()=>{
        console.log("hola")
        const muroConstruido = construir({...muro}, aplanar)
        const muroAplanado= aplanar({muroConstruido})
        console.log(muroAplanado)
    }, 2000)

    // console.log("muro", muro)








    /* 
Ejemplo de ... spread operator

const someObject = {name:'Rod', lastName:'leon}
let otherObject = {...someObject}
DEVULEVE: {name:'Rod', lastName:leon}

const a = [1.2]
const b = ["tres", "cuatro"]
const c = [...a, ...b]
DEVUELVE: [1.2."tres","cuatro"]

Devuelve una copia y prograga 
*/

