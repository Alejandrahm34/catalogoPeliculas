const express = require('express');
const router = express.Router();
const {getPeliculas} = require('../controllers/peliculasControllers');

router.get('/', getPeliculas);

module.exports = router;