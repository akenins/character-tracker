const express = require('express')
const rulesRouter = express.Router()

const Rules = require('../models/Rules')

// @route   GET api/rules
// @desc    Get list of all rules
// @access  Public
rulesRouter.route('/').get(async (req, res) => {
  try {
    const count = await Rules.countDocuments()
    const results = await Rules.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/rules/:index
// @desc    Get details of requested rule
// @access  Public
rulesRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await Rules.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = rulesRouter
