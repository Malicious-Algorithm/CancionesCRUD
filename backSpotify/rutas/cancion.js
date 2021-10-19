const express = require('express');
const route = express.Router();
const cancionController = require('../controllers/cancionController');


route.post('/', cancionController.agregarCancion);
route.get('/', cancionController.obtenerCanciones);
route.delete('/:id', cancionController.eliminarCancion);


module.exports = route;