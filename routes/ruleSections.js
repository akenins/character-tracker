const express = require('express')
const ruleSectionsRouter = express.Router()

const RuleSections = require('../models/RuleSections')

// @route   GET api/rule-sections
// @desc    Get list of all rule sections
// @access  Public
ruleSectionsRouter.route('/').get(async (req, res) => {
  try {
    const count = await RuleSections.countDocuments()
    const results = await RuleSections.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/rule-sections/:index
// @desc    Get details of requested rule section
// @access  Public
ruleSectionsRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await RuleSections.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = ruleSectionsRouter
