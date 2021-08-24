// requerimos la conexión
require('../connection');

// Requerimos el modelo
const producto = require('../models/Productos');

const crear = async () => {
    const laptop = new producto({
        nombre: "Laptop",
        descrip: "Laptop muy buena",
        precio: 90000
    });

    await laptop.save();

    const laptop2 = new producto({
        nombre: "Laptop Lenovo xone",
        descrip: "Laptop muy buena",
        precio: 90000
    });

    await laptop2.save();
}

crear();