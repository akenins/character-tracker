const mongoose = require('mongoose')

const TraitsSchema = mongoose.Schema({}, { collection: 'traits' })

module.exports = mongoose.model('traits', TraitsSchema)
