const express = require('express')
const magicSchoolsRouter = express.Router()

const MagicSchools = require('../models/MagicSchools')

// @route   GET api/magic-schools
// @desc    Get list of all magic schools
// @access  Public
magicSchoolsRouter.route('/').get(async (req, res) => {
  try {
    const count = await MagicSchools.countDocuments()
    const results = await MagicSchools.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/magic-schools/:index
// @desc    Get details of requested magic school
// @access  Public
magicSchoolsRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await MagicSchools.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = magicSchoolsRouter
