// requerimos la conexión
require('../connection');

// Requerimos el modelo
const User = require('../models/User');

const updateUser = async () => {
    const usr = await User.updateOne({nombre: "Ethanial"}, {password: "miguel23"});
    console.log(usr);
}

updateUser();