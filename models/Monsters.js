const mongoose = require('mongoose')

const MonstersSchema = mongoose.Schema({}, { collection: 'monsters' })

module.exports = mongoose.model('monsters', MonstersSchema)
