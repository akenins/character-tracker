const express = require('express')
const racesRouter = express.Router()

const Races = require('../models/Races')

// @route   GET api/races
// @desc    Get list of all races
// @access  Public
racesRouter.route('/').get(async (req, res) => {
  try {
    const count = await Races.countDocuments()
    const results = await Races.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/races/:index
// @desc    Get details of requested race
// @access  Public
racesRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await Races.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = racesRouter
