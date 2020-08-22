const Paciente = require('../models/Paciente');

// When create a new client:
exports.nuevoCliente = async(req, res, next) => {
    
    const paciente = new Paciente(req.body);
    
    try {
        await paciente.save();
        res.json({ message: 'The client has been added successfuly'});
    } catch (error) {
        console.log(error);
        next();
    }

}

// Get all clients
exports.obtenerClientes = async (req, res, next) => {
    try {
        const pacientes = await Paciente.find({});
        res.json(pacientes);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Get Client by id
exports.obtenerCliente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findById(req.params.clientId);
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Update Client by id
exports.actualizarCliente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id: req.params.clientId}, req.body, {
            new: true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}

// Delete Client by id
exports.eliminarPaciente = async (req, res, next) => {
    try {
        await Paciente.findOneAndDelete({_id: req.params.clientId});
        res.json({message: 'The client has been removed successfuly'});
    } catch (error) {
        console.log(error);
        next();
    }
}