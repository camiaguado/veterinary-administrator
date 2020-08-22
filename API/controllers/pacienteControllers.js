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