const mongoose = require('mongoose')

const ConditionsSchema = mongoose.Schema({}, { collection: 'conditions' })

module.exports = mongoose.model('conditions', ConditionsSchema)
