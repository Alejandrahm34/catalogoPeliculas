const express = require ('express'); //llamamos a express
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000 //el puerto de la app

const app = express();//activa express

app.use('/api/peliculas', require('./routes/peliculasRoutes.js'));


app.listen(port, () => console.log(`Server iniciado en el puerto ${port}`));