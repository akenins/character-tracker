const mongoose = require('mongoose')

const SpellsSchema = mongoose.Schema({})

module.exports = mongoose.model('spells', SpellsSchema)
