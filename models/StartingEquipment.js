const mongoose = require('mongoose')

const StartingEquipmentSchema = mongoose.Schema(
  {},
  { collection: 'startingEquipment' }
)

module.exports = mongoose.model('startingEquipment', StartingEquipmentSchema)
