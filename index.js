// requerimos Mongoose
const mongoose = require('mongoose');

// Conectamos a mongoDB
// protocolo://dirección:puerto/baseDeDatos
const uri = 'mongodb://localhost:27017/Store';

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Eventos de Mongoose
// - Conectado
mongoose.connection.on('open', _ => {
    console.log("Database is connected to",uri);
});

// - Error en la conexión
mongoose.connection.on('error', err => {
    console.log(err);
});