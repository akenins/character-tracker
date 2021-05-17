const mongoose = require('mongoose')

const SkillsSchema = mongoose.Schema({}, { collection: 'skills' })

module.exports = mongoose.model('skills', SkillsSchema)
