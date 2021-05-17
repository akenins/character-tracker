const mongoose = require('mongoose')

const DamageTypesSchema = mongoose.Schema({}, { collection: 'damageTypes' })

module.exports = mongoose.model('damageTypes', DamageTypesSchema)
