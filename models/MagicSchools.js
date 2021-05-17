const mongoose = require('mongoose')

const MagicSchoolsSchema = mongoose.Schema({}, { collection: 'magicSchools' })

module.exports = mongoose.model('magicSchools', MagicSchoolsSchema)
