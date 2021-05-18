const express = require('express')
const languagesRouter = express.Router()

const Languages = require('../models/Languages')

// @route   GET api/languages
// @desc    Get list of all languages
// @access  Public
languagesRouter.route('/').get(async (req, res) => {
  try {
    const count = await Languages.countDocuments()
    const results = await Languages.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/languages/:index
// @desc    Get details of requested language
// @access  Public
languagesRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await Languages.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = languagesRouter
