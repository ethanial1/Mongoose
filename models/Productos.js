// Definimos el esquema: son las propiedades que van a tener nuestros datos dentro de la 
// base de datos.

// Extraemos una propiedad de mongoose: Destructuring?
const { Schema, model } = require('mongoose');

// Schema types: https://mongoosejs.com/docs/schematypes.html

// Esquema del producto para mongoose
const productoSchema = new Schema({
    nombre: String,
    descrip: String,
    precio: {
        type: Number,
        default: 0
    }
});

// El model es el que usamos para interactuar con la base de datos
module.exports = model('Productos', productoSchema);