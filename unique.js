require('./connection');

const user = require('./models/User');

async function crearUser() {
    const usr = new user({
        nombre: "Ethanial",
        password: "miguel23"
    });

    await usr.save();
    /*
    const usr2 = new user({
        nombre: "Ethanial",
        password: "miamor"
    });

    const result = await urs2.save();
    */
}

crearUser();