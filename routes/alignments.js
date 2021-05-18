const express = require('express')
const alignmentsRouter = express.Router()

const Alignments = require('../models/Alignments')

// @route   GET api/alignments
// @desc    Get list of all alignments
// @access  Public
alignmentsRouter.route('/').get(async (req, res) => {
  try {
    const count = await Alignments.countDocuments()
    const results = await Alignments.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/alignments/:index
// @desc    Get details of requested alignment
// @access  Public
alignmentsRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await Alignments.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = alignmentsRouter
