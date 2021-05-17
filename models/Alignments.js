const mongoose = require('mongoose')

const AlignmentsSchema = mongoose.Schema({}, { collection: 'alignments' })

module.exports = mongoose.model('alignments', AlignmentsSchema)
