const { Schema, model } = require('mongoose');

const movementSchema = new Schema({
    id: { type: String, required: true },
    idStuff: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    quantity: { type: Number, required: true }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('movement', movementSchema)