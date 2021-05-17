const mongoose = require('mongoose')

const ProficienciesSchema = mongoose.Schema({}, { collection: 'proficiencies' })

module.exports = mongoose.model('proficiencies', ProficienciesSchema)
