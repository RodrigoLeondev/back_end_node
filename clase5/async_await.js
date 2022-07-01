/**
 * Async/Await
 * async -> Asincrono -> que indica cuando una funcion va a ser asincrona. (internamente un await)
 * await -> Esperar -> es para esperar que una PROMESA se cumpla.
 */


/*  const muro = {
    construido: false,
    aplanado: false,
    pintado: false
  }
  
  
  const construir = (muro) => {
    // Haciendo mi promesa, declarandola
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Ejecucion
        muro.construido = true
        // Ya se resolvio mi promesa
        if(muro.construido){
          resolve(muro) // -> me ahorro return, es un return -> then recibe esto
        } else {
          reject(new Error("No se pudo construit")) // catch recibe esto
        }
      }, 3000)
    })
  }
  const aplanar = (muro) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        muro.aplanado = true
        // -> Logica negativa
        if(!muro.aplanado){ // -> no se cumple
          reject(console.log("No se pudo aplanar")) // -> re
          return
        } 
        // Continuamos
        resolve(muro)
      },3000)
    })
  }
  
  const pintar = (muro) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        muro.pintado = true
        // -> Logica negativa
        if(!muro.pintado){ // -> no se cumple
          reject(new Error("No se pudo pintar"))
          return
        } 
        // Continuamos
        resolve(muro)
      },3000)
    })
  }
  
  // Sintaxis
  
  // async va al principio, antes de la palabra reservada function
  async function main() {
   //.....
  
  }
  
  // Arrow functions
  // async va antes de los parentesis.
  const arrowF = async (muro) => {
    //... Aqui hay una promesa
    // await construir(muro) // -> solo la quiero ejecutar
    const muroConstruido = await construir(muro)
    console.log("muroConstruido", muroConstruido)
    const muroAplanado = await aplanar(muroConstruido)
    console.log("muroAplanado", muroAplanado)
    const muroPintado = await pintar(muroAplanado)
    console.log("muroPintado", muroPintado)
  
  }
  
  // Ejecutando nuestra funcion async
  arrowF({...muro})
 */


  const pastel = {
      prepararMasa : false,
      hornerarla : false,
      decorarlo : false
  }

  const elaborar = (pastel) => {
      return new Promise ((resolve, reject) => {
          setTimeout(() => {
              pastel.elaborado = true
              if(pastel.elaborado){
                  resolve(pastel)
              }else {
                  reject(new Error("No se pudo elaborar"))
              }
          }, 2000)
      })
  }

  const hornear = (muro) => {
      return new Promise((resolve, reject) => {
          setTimeout(()=>{
              pastel.horneado = true
              if(!pastel.horneado){
                reject(console.log("no se pudo hornear"))
            return 
              }
              resolve(pastel)
          }, 2000)
      })
  }

  const decorar = (pastel) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            pastel.decorado = true
            if(!pastel.decorado){
              reject(console.log("no se pudo decorar"))
          return 
            }
            resolve(pastel)
        }, 2000)
    })
}

// Regla
// 1. Hacer una función async
const arrPastel = async (pastel) => {
    // 2. El await va dentro de la función, si no, no se puede usar await
    const masaElaborada = await elaborar(pastel)
    const hornearPastel = await hornear(masaElaborada)
    const decorarPastel = await decorar(hornearPastel)
    // 3. El await espera una promesa
}
// 4. la función async retorna una promesa
arrPastel({...pastel})

// Haciendo .then y .catch
// arrPastel(pastel)
// .then((arrPastel) => {
//     console.log(arrPastel)
// })
// .catch((err) => console.error(err))