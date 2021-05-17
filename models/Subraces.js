const mongoose = require('mongoose')

const SubracesSchema = mongoose.Schema({}, { collection: 'subraces' })

module.exports = mongoose.model('subraces', SubracesSchema)
