const mongoose = require('mongoose')

const RuleSectionsSchema = mongoose.Schema({}, { collection: 'ruleSections' })

module.exports = mongoose.model('ruleSections', RuleSectionsSchema)
