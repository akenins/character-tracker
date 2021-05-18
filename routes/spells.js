const express = require('express')
const spellsRouter = express.Router()

const Spells = require('../models/Spells')

// @route   GET api/spells
// @desc    Get list of all spells
// @access  Public
spellsRouter.route('/').get(async (req, res) => {
  try {
    const count = await Spells.countDocuments()
    const results = await Spells.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/spells/:index
// @desc    Get details of requested spell
// @access  Public
spellsRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await Spells.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = spellsRouter
