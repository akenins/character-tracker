const express = require('express')
const traitsRouter = express.Router()

const Traits = require('../models/Traits')

// @route   GET api/traits
// @desc    Get list of all traits
// @access  Public
traitsRouter.route('/').get(async (req, res) => {
  try {
    const count = await Traits.countDocuments()
    const results = await Traits.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/traits/:index
// @desc    Get details of requested trait
// @access  Public
traitsRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await Traits.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = traitsRouter
