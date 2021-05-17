const mongoose = require('mongoose')

const LanguagesSchema = mongoose.Schema({}, { collection: 'languages' })

module.exports = mongoose.model('languages', LanguagesSchema)
