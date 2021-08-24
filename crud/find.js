// requerimos la conexión
require('../connection');

// Requerimos el modelo
const Producto = require('../models/Productos');

// Función async
async function main() {
    // Consultamos en la colección y obtenemos todos los datos
    const lista = await Producto.find();
    console.log(lista);
}

main();
