// requerimos Mongoose
const mongoose = require('mongoose');

// Conectamos a mongoDB
// protocolo://dirección:puerto/baseDeDatos
const uri = 'mongodb://localhost:27017/Store';

const db = mongoose.connection;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).catch(err => console.log(err));

// Eventos de Mongoose
// - Conectado (Solo se ejecuta una vez)
db.once('open', _ => {
    console.log("Database is connected to",uri);
});

// - Error en la conexión
db.on('error', err => {
    console.log(err);
});