const mongoose = require('mongoose')

const SubclassesSchema = mongoose.Schema({}, { collection: 'subclasses' })

module.exports = mongoose.model('subclasses', SubclassesSchema)
