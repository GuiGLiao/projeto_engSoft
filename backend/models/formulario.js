const mongoose = require('mongoose');
const formularioSchema = new mongoose.Schema({
    marca: String,
    carro: String,
    pista: String
});


const Formulario = mongoose.model('Formulario', formularioSchema);

module.exports = { Formulario };