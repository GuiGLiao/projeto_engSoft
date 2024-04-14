const {onRequest} = require("firebase-functions/v2/https");
const express = require('express');
const connection = require('./connection');
const { Formulario } = require('./models/formulario');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.get('/formulario', async(req, res) => {
    const formularios = await Formulario.find();
    res.json(formularios);
})

app.post('/formulario', async(req, res) => {
    const { marca, carro, pista } = req.body;
    const formulario = new Formulario({ marca, carro, pista });
    await formulario.save();
    res.json(formulario);
})

async function init(){
    await connection();
    app.listen(port, () => {
        console.log("Server is running on port 3000")
    })
}

let mongoconnection = null;

exports.api = onRequest(async (req, res) => {
    if (!mongoconnection || mongoconnection.connection.readyState !== 1) {
        mongoconnection = await connection();
    } 
    app(req, res);
});
//init();