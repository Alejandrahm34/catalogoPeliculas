const express = require('express');
const router = express.Router();
const {getPeliculas, crearPeliculas, updatePeliculas, deletePeliculas} = require('../controllers/peliculasControllers');

router.get('/', getPeliculas);
router.post('/', crearPeliculas);
router.put('/:id', updatePeliculas);
router.delete('/:id', deletePeliculas);

module.exports = router;