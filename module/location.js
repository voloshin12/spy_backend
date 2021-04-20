const { Schema, model } = require("mongoose")

const Location = new Schema({
    title: {type: String, unique: true, required: true},
    roles: {type: Array, ref: 'Role'}
})

module.exports = model('Locations', Location)