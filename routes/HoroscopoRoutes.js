const express = require('express');
const router = express.Router();

const { getAllHoroscopos, getHoroscopoBySigno, createHoroscopo, updateHoroscopo, deleteHoroscopo } = require('../controllers/HoroscopoController');

// Obtener todos los horóscopos
router.get('/', getAllHoroscopos);

// Obtener un horóscopo por su ID
router.get('/:signo', getHoroscopoBySigno);

// Crear un nuevo horóscopo
router.post('/crearhoroscopo', createHoroscopo);

// Actualizar un horóscopo existente
router.put('/:id', updateHoroscopo);

// Eliminar un horóscopo existente
router.delete('/:id', deleteHoroscopo);

module.exports = router;