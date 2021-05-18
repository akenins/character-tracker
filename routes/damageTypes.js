const express = require('express')
const damageTypesRouter = express.Router()

const DamageTypes = require('../models/DamageTypes')

// @route   GET api/damage-types
// @desc    Get list of all damage types
// @access  Public
damageTypesRouter.route('/').get(async (req, res) => {
  try {
    const count = await DamageTypes.countDocuments()
    const results = await DamageTypes.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/damage-types/:index
// @desc    Get details of requested damage type
// @access  Public
damageTypesRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await DamageTypes.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = damageTypesRouter
