
const getPeliculas = (req, res) => {
    res.status(200).json({message: 'getPeliculas'});//mensaje en postman cuando ponga el metodo get

}
const crearPeliculas = (req, res) => {
    res.status(201).json({message: 'crearPeliculas'});
}

const updatePeliculas = (req, res) => {
    res.status(200).json({message:`Modificar la pelicula ${req.params.id}` });
}

const deletePeliculas = (req, res) => {
    res.status(201).json({message:`Eliminar la pelicula ${req.params.id}`});
}
module.exports = {
    getPeliculas,
    crearPeliculas,
    updatePeliculas,
    deletePeliculas
}