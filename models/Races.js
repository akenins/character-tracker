const mongoose = require('mongoose')

const RacesSchema = mongoose.Schema({}, { collection: 'races' })

module.exports = mongoose.model('races', RacesSchema)
