const stuffsCTRL = {};

const stuffdb = require('../models/stuffs')
const movementdb = require('../models/movements')

//Obtener todos las telas
stuffsCTRL.getStuffs = async (req, res) => {
    const stuffs = await stuffdb.find();
    res.json(stuffs);
};

//Obtener solo una tela by ID
stuffsCTRL.getStuff = async (req, res) => {
    const stuff = await stuffdb.findOne({ id: req.params.id });
    res.send(stuff);
};

//Obtener solo una tela by name
stuffsCTRL.getStuffName = async (req, res) => {
    const stuff = await stuffdb.findOne({ name: req.params.name });
    res.send(stuff);
};

//Ingresar una tela
stuffsCTRL.createStuffs = async (req, res) => {
    const newStuff = new stuffdb(req.body);
    await newStuff.save();
    res.send({ message: 'Stuff Created' })
};

//Actualizar las telas
stuffsCTRL.editStuffs = async (req, res) => {
    await stuffdb.findOneAndUpdate({ id: req.params.id }, req.body);
    res.json({ status: "Stuff Edited" })
};

//Borrar las telas
stuffsCTRL.deleteStuffs = async (req, res) => {
    await stuffdb.findOneAndDelete({ id: req.params.id });
    res.json({ status: "Stuff Deleted" });
};




//Movimientos
//Obtener todos los movimientos
stuffsCTRL.getMovements = async (req, res) => {
    const movement = await movementdb.find({ idStuff: req.params.idStuff });
    res.json(movement);
};

//Ingresar Movimientos
stuffsCTRL.createMovements = async (req, res) => {
    const newMovement = new movementdb(req.body);
    await newMovement.save();
    res.send({ message: 'Movement Created' })
};





module.exports = stuffsCTRL;