const mongoose = require('mongoose')

const RulesSchema = mongoose.Schema({}, { collection: 'rules' })

module.exports = mongoose.model('rules', RulesSchema)
