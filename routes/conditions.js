const express = require('express')
const conditionsRouter = express.Router()

const Conditions = require('../models/Conditions')

// @route   GET api/conditions
// @desc    Get list of all conditions
// @access  Public
conditionsRouter.route('/').get(async (req, res) => {
  try {
    const count = await Conditions.countDocuments()
    const results = await Conditions.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/conditions/:index
// @desc    Get details of requested condition
// @access  Public
conditionsRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await Conditions.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = conditionsRouter
