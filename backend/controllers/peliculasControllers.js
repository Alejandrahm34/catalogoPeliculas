const getPeliculas = (req, res) => {
    res.status(200).json({message: 'getPeliculas'});//mensaje en postman cuando ponga el metodo get

}
module.exports = {
    getPeliculas
}