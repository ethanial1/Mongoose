// requerimos la conexión
require('../connection');

// Requerimos el modelo
const user = require('../models/User');

async function getUser() {
    const usr = await user.findOne({nombre: "Ethanial"});
    console.log(usr);
}

getUser();