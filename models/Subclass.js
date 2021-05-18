const mongoose = require('mongoose')
const { Schema } = mongoose

const levelSchema = new Schema({
  level: Number,
  feature_choices: Array,
  features: [{ index: String, name: String, url: String }],
  class: { index: String, name: String, url: String },
  subclass: { index: String, name: String, url: String },
  url: String,
  index: String,
})

const spellSchema = new Schema({
  spells: {
    prerequisites: [{ index: String, type: String, name: String, url: String }],
    spell: { index: String, name: String, url: String },
  },
})

const SubclassSchema = new Schema(
  {
    index: { type: String, unique: true },
    class: Object,
    name: String,
    subclass_flavor: String,
    desc: [String],
    spells: [spellSchema],
    levels: [levelSchema],
    subclass_levels: String,
    url: String,
  },
  { collection: 'subclasses' }
)

module.exports = mongoose.model('Subclass', SubclassSchema)
