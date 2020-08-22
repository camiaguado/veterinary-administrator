const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')

module.exports = function() {
    // Add new pacients throw POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    );

    // Get all pacients from the database
    router.get('/pacientes',
        pacienteController.obtenerClientes
    );
    
    // Obtain Client by id
    router.get('/pacientes/:clientId',
        pacienteController.obtenerCliente
    );
    return router;
}