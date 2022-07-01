const http = require("http")

const server = http.createServer((request, response) =>{
    // Escribiendo
    response.write("hola desde mi servidor")

    // Acabar
    response.end()
})

// Listening
// 1. PORT
// 2. CALLBACK
server.listen(8080, () => {
    console.log("Servidor prendido")
} )