const mongoose = require('mongoose')

const FeaturesSchema = mongoose.Schema({}, { collection: 'features' })

module.exports = mongoose.model('features', FeaturesSchema)
