const mongoose = require('mongoose')

const CharacterSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('character', CharacterSchema)
