const mongoose = require('mongoose')

const AbilityScoresSchema = mongoose.Schema({}, { collection: 'abilityScores' })

module.exports = mongoose.model('abilityScores', AbilityScoresSchema)
