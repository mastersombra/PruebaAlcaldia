const { Schema, model } = require('mongoose');

const stuffSchema = new Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    state: { type: String, required: true },
    quantity: { type: Number, required: true }
}, {
    timestamps: true,
    versionKey: false
})

module.exports = model('stuff', stuffSchema)