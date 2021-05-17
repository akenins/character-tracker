const mongoose = require('mongoose')

const MagicItemsSchema = mongoose.Schema({}, { collection: 'magicItems' })

module.exports = mongoose.model('magicItems', MagicItemsSchema)
