const express = require('express')
const abilityScoresRouter = express.Router()

const AbilityScores = require('../models/AbilityScores')

// @route   GET api/ability-scores
// @desc    Get list of all ability scores
// @access  Public
abilityScoresRouter.route('/').get(async (req, res) => {
  try {
    const count = await AbilityScores.countDocuments()
    const results = await AbilityScores.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/ability-scores/:index
// @desc    Get details of requested ability score
// @access  Public
abilityScoresRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await AbilityScores.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = abilityScoresRouter
