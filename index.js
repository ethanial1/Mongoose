// Requerimos la conexión a la base de datos
require('./connection');

// Requerimos el modelo
const Producto = require('./models/Productos');

// Importanet: AQUÍ SOLO LO ESTAMOS CREADO
const producto1 = new Producto({
    nombre: "iPhone",
    descrip: "iPhone 11x",
    precio: 29000
});


// LO GUARDAMOS EN LA BASE DE DATOS
producto1.save((err, document) => {
    if (err) console.log(err);
    console.log(document);
});

//console.log(producto1);
