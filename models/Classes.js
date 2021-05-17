const mongoose = require('mongoose')

const ClassesSchema = mongoose.Schema({}, { collection: 'classes' })

module.exports = mongoose.model('classes', ClassesSchema)
