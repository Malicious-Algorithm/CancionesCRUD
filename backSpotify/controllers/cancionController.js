const Cancion = require("../modelos/Cancion");



exports.agregarCancion = async (req, res) => {
    try {
        let cancion;

        cancion = new Cancion(req.body);

        await cancion.save();
        res.send(cancion);


    } catch (error) {
        console.log(error);
        res.status(404).send("Hubo un error");
    }
}

exports.obtenerCanciones = async (req, res) => {
    try {

        const canciones = await Cancion.find();
        res.json(canciones);

    } catch (error) {
        console.log(error);
        res.status(404).send("Hubo un error");
    }
}

exports.eliminarCancion = async (req, res) => {
    try {


        let cancion = await Cancion.findById(req.params.id);

        if(!cancion){
            res.status(404).json({ msg: 'No existe la cancion'});
        }
        await Cancion.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'cancion eliminada de la playlist'});

    } catch (error) {
        console.log(error);
        res.status(404).send("Hubo un error");
    }
}
