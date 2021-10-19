const express = require('express');
const conectDB = require('./db');
const cors = require('cors');
const peticiones = require('./rutas/cancion');

//creando el server
const app = express();

conectDB();

app.use(cors());
app.use(express.json());
app.use('/api/canciones', peticiones);

//escuchando en puerto 5k
app.listen(4000, () => console.log("el server esta corriendo perfectamente!") );