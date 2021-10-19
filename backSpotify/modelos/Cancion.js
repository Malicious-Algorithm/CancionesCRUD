const mongoose = require("mongoose");


//el modelo es una instancia de un documento 
//& el esquema define como cada documento se verá 
const CancionSchema = mongoose.Schema({

    nombre: {
        type: String,
        required: true
    },

    autor: {
        type: String,
        required: true
    },

    ano: {
        type: String,
        required: false
    }

})

//el nombre de la coleccion es "Cancion" y como segundo argumento le pasamos el esquema
module.exports = mongoose.model('Cancion', CancionSchema);