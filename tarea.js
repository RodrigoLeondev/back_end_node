/* 
Reduce

*/
// input
const nombres = [
    "Paco",
    "Lorena",
    "Kike",
    "Abraham",
    "Cris",
    "Victor",
    "Marco",
    "Israel",
    "Annie",
    "Ërnesto",
    "Francisco",
    "Lenny",
    "Rod",
    "Noemi",
    "Benjamin",
  ];

//   Output, regresar con su lenght

// Codigo Rod
// let = ''
// if (process.argv[2] !== undefined) {
//     lenghtName = process.argv[2]
// }

  // const nameLenght = nombres.reduce( ( acc, item )=> {  --> debi pedir el item o cv
//     return acc += item.length
//   }, )
  

// Tarea codigo Ale-Fco
  const resultado = nombres.reduce((acc, cv) => {
    return {
      ...acc,
      [cv] : cv.length
    }
  }, {})  // lo que quiero que hga es que me de un objeto

  console.log("resultado", resultado)