/* 
Hacer una función que reciba como parámetro un nombre e imprima
Hola {nombre}, como están?
*/
/* 
No se manipula ni DOM ni BOM
*/

// const saludo = nombre => {
// return `Hola ${nombre}, todo ¿cul?`
// }

//     console.log(saludo('Rod'))

// const nombres = [
//     "Paco",
//     "Abraham",
//     "Lorena",
//     "Kike",
//     "Victor",
//     "Annie",
//     "Israel",

// ]

// let nombremenos = nombres.map((nombre)=> {
//     if(nombres.length < 5){
//         return nombre
//     }
    
// })
// console.log(nombremenos)

// const nombreMayor = nombres.filter(nombre => nombre.length >= 5);
// console.log(nombreMayor)


/* const nombresMenores = nombres.filter(nombre => {
    if(nombre.length < 5) {
      return nombre
    }
  })
  
  const nombresMenores2 = nombres.filter(nombre => nombre.length < 5);
  const nombresMayores2 = nombres.filter(nombre => nombre.length >= 5);
  // console.log(nombresMenores2)
  // console.log(nombresMayores2)
  
  
  const separar = () => {
    let nombresMenoresArray = []
    let nombresMayoresArray = []
  
    nombres.forEach(nombre => {
     
      if(nombre.length < 5) {
        nombresMenoresArray.push(nombre);
      } else {
        nombresMayoresArray.push(nombre);
      }
    })
  
    // Destructuracion
    return [nombresMenoresArray, nombresMayoresArray]
  }
  
  // Destructuracion
  const [nombresMenoresArray, nombresMayoresArray] = separar()
  
  const resultado = separar()
  console.log("resultado", resultado[0])
  console.log("resultado", resultado[1])
 */




  /* CLASE 2 28-06-2022 */


//     if( process.argv[2] != undefined ){
//     strNombre = process.argv[2]
// }
//   var colors = require('colors');
//   let name = 'Rodrigo '

// console.log(`Hola me llamo ${name}`.rainbow)

// function avisar() {
//   console.log('ya llegue a casa')
// }

// function irACasa(callback) {
//   console.log('llegue a casa');
//   callback()
// }
// irACasa(avisar)


// Funciones:
// Declaración
// Ejecución ()--> va con paréntesis


/* 
CRUD 
*/

// READ
const fs = require("fs");
// const { get } = require("http");

// fs.readFile('hola.txt', 'utf8', (err, data) => {
// if(err) throw(err);

// console.log(data);
// });

// Create

// fs.writeFile("ejemplo.txt", "contenido de ejemplo creando txt", "utf8", (err) =>{
//   if(err){
//     console.log("Te la pelaste")
//     return
//   }
// })


// Delete
// const fs = require("fs")

// fs.unlink('ejemplo.txt', (err) => {
//   if(err) throw(err);

//   console.log('ejemplo.txt esta muerto')
// })

// Leer directorio

// fs.writeFile("yoNoEntiendoNada.txt", "Yo no entiendo nada", "utf8", (err) =>{
//   if(err){
//     console.log("Te la pelaste")
//     return
//   }
// })

// fs.mkdir('yoNoEntiendoNada', { recursive : true }, (err) => {
//   if (err) throw (err);
// })

// fs.writeFile("yoNoEntiendoNada/noEntendix4.txt", "Yo no entiendo nada x4 #Patricio", "utf8", (err) =>{
//   if(err){
//     console.log("Te la pelaste")
//     return
//   }
// })

/* 
TAREA
Eliminar archivos dentro de un directorio

*/

// List files before deleting
// getCurrentFilenames();
//   console.log(getCurrentFilenames)
// fs.rm('yoNoEntiendoNada/noEntendix4.txt', { recursive:true }, (err) => {
//     if(err){
//         console.log('Andas en malos pasos hijo... error');
//         return;
//     }
//      console.log("File deleted successfully");
      
// })
  
// Intento de remover file to directory
// function rmAll() {  
//     fs.rm(__yoNoEntiendoNada).forEach(file => { 
//         console.log(file); 
//     });  
// }
// Respuesta de tarea 

  fs.rmdir("yoNoEntiendoNada/", {recursive:true}, (error) => { 
    if (error){
      throw error
    }
  });  
