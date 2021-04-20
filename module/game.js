const { Schema, model } = require("mongoose")

const Game = new Schema({
    status: {type: Boolean, default: false}
})

module.exports = model('Games', Game)