const mongoose = require('mongoose');
require('dotenv').config({ path: 'mongodb://localhost/spotify' });

const URI = "mongodb://localhost/spotify";

const conectDB = async () =>{

    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log("db Conectada!")

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectDB;