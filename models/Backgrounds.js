const mongoose = require('mongoose')

const BackgroundsSchema = mongoose.Schema({}, { collection: 'backgrounds' })

module.exports = mongoose.model('backgrounds', BackgroundsSchema)
