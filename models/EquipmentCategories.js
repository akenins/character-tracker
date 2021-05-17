const mongoose = require('mongoose')

const EquipmentCategoriesSchema = mongoose.Schema(
  {},
  { collection: 'equipmentCategories' }
)

module.exports = mongoose.model(
  'equipmentCategories',
  EquipmentCategoriesSchema
)
