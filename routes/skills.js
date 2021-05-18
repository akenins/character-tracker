const express = require('express')
const skillsRouter = express.Router()

const Skills = require('../models/Skills')

// @route   GET api/skills
// @desc    Get list of all skills
// @access  Public
skillsRouter.route('/').get(async (req, res) => {
  try {
    const count = await Skills.countDocuments()
    const results = await Skills.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/skills/:index
// @desc    Get details of requested skill
// @access  Public
skillsRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await Skills.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = skillsRouter
