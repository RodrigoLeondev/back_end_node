/* PROMESAS */

/* 
Status/Estado
1 - Rechazado
2 - Aceptada
3 - Pending

new promises((resolve, reject) =>{})

Resolve Function -> Cuando ya se cumplió, pasa al estado "accepted", lo que tenía que hacer la promesa
Reject Function -> Cuando no se cumple la promersa y pasa a estado "rejected" y no se resuelve

Then -> Hazme algo --> Cuando ya se ejecutó, se cumplió y
Catch -> Reciben error -->

*/

const muro = {
    construido :  false,
    aplanado : false,
    pintado : false
}

const construir = (muro) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Ejecución
            muro.construido = true
            // Ya se resolvió
            if(muro.construido){

           
            resolve(muro) // esto es un return
            } else {
                reject(new Error("no se pudo construir"))
            }
        }, 3000)
    })
}
const muroConstruidoPromesa = construir({...muro})

muroConstruidoPromesa
.then((muro)=> console.log("el muro ya fue construido", muro))
.catch((err) => console.error(err))