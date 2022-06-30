// console.log(process);

if (process.argv[3] !== undefined) {
    console.log(process.argv)
}

/* 
Generar un script que reciba un parámetro y nos diga si el nombre esta en el arreglo nombres. 
Si esta que imprima si esta; si no, que imprima fuera de aquí
*/
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

//   Aquí nos aseguramos que tiene un parámetro
let strName = ""
  if (process.argv[2] !== undefined) {
    strName = process.argv[2]
}
// console.log(strName);

const existe = nombres.filter(nombre => nombre === strName)

// comprobamos en terminal colocando node buscador.js y algun nombre y debe imprimir o no el console
// console.log("si existe", existe)


if ( existe.length == 1 ){
    console.log( "Bienvenido " + strName )
}
else{
    console.log( "Fuera de Aqui " + strName )
}







// Mi codigo
//   let nameSearch = () => {
//     let name = []
//     let notName = []

//       nombres.forEach(nombre => {
//         if (nombres.argv[3] !== undefined) {
//             console.log(process.argv)
//         }
          
//       })
      
//   }
//   Victor codigo
//   if( process.argv[2] != undefined ){
//     strNombre = process.argv[2]
// }
// console.log( strNombre )

// const resultNombre = nombres.filter(nombre => nombre === strNombre );
// if ( resultNombre.length == 1 ){
//     console.log( "Bienvenido " + strNombre )
// }
// else{
//     console.log( "Fuera de Aqui " + strNombre )
// }

