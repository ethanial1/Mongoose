// requerimos la conexión
require('../connection');

// Requerimos el modelo
const Product = require('../models/Productos');

const deleteProduct = async () => {
    // eliminamos uno de ellos
    //const result = await Product.findOneAndDelete({nombre: "iPhone"});

    // elimina todos los que coincidan
    //const result = await Product.deleteMany({nombre: "iPhone"});

    // elimina en base al id
    const result = await Product.findByIdAndDelete("612531d3613cc107240714b3");


    console.log(result);
}

deleteProduct();