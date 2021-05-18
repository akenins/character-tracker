const express = require('express')
const classRouter = express.Router()

const Classes = require('../models/Classes')

// @route   GET api/classes
// @desc    Get list of all classes
// @access  Public
classRouter.route('/').get(async (req, res) => {
  try {
    const count = await Classes.countDocuments()
    const results = await Classes.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/classes/:index
// @desc    Get details of requested class
// @access  Public
classRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await Classes.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = classRouter
