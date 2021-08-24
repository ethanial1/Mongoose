// requerimos la conexión
require('./connection');

// Requerimos el modelo
const Producto = require('./models/Productos');

// código asíncrono
async function main(){
    const producto1 = new Producto({
        nombre: "iPhone 12",
        descrip: "Producto Apple",
        precio: 50000
    });

    const result = await producto1.save();
    return result;
}

main()
    .then(product => console.log(product))
    .catch(err => console.log(err));