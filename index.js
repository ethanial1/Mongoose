// requerimos Mongoose
const mongoose = require('mongoose');

// Conectamos a mongoDB
// protocolo://dirección:puerto/baseDeDatos
mongoose.connect('mongodb://localhost:27017/Store', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

