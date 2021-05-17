const mongoose = require('mongoose')

const EquipmentSchema = mongoose.Schema({}, { collection: 'equipment' })

module.exports = mongoose.model('equipment', EquipmentSchema)
