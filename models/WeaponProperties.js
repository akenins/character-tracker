const mongoose = require('mongoose')

const WeaponPropertiesSchema = mongoose.Schema(
  {},
  { collection: 'weaponProperties' }
)

module.exports = mongoose.model('weaponProperties', WeaponPropertiesSchema)
