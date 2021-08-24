const { Schema, model } = require('mongoose');

// Escquema del usuario
const user = new Schema({
    nombre: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
    date: {
        type: Date,
        default: new Date()
    }
});

module.exports = model('User', user);