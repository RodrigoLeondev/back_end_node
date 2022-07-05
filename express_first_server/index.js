const express = require("express");
const app = express()

// app.get("/hola", (request, response) => {
//     response.write("aloo desde acá /hola")
//     response.end()
// })
// app.post("/adios", (request, response) => {
//     response.send("haciendo post ")
// })


app.get("/prueba", (request, response) => {
    response.write("probando 123 /prueba")
    response.end("prueba correcta")
})

/* Ejercicio 
Hacer un enpoint, donde lea un archivo
*/

app.listen(8080, () => {
    console.log("ya estamos escuchando desde servidor etsspretss")
})