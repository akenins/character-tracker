const express = require('express')
const subclassRouter = express.Router()
// mergeParams must be set to true if you want to
// access params of the parent route
const levelRouter = express.Router({ mergeParams: true })

// You can nest routers by attaching them as middleware
subclassRouter.use('/:index/levels', levelRouter)

const Subclass = require('../models/Subclass')

// @route   GET api/subclasses
// @desc    Get list of all subclasses
// @access  Public
subclassRouter.route('/').get(async (req, res) => {
  try {
    const count = await Subclass.countDocuments()
    const results = await Subclass.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/subclasses/:index
// @desc    Get details of requested subclass
// @access  Public
subclassRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await Subclass.findOne(
      { index: req.params.index },
      {
        _id: 0,
        index: 1,
        class: 1,
        name: 1,
        subclass_flavor: 1,
        spells: 1,
        desc: 1,
        subclass_levels: 1,
        url: 1,
      }
    ).lean()
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/subclasses/:index/levels
// @desc    Get list of all subclass levels
// @access  Public
levelRouter.route('/').get(async (req, res) => {
  try {
    const results = await Subclass.findOne(
      { index: req.params.index },
      {
        _id: 0,
      }
    ).lean()
    res.json(results.levels)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/subclasses/:index/levels/:level
// @desc    Get details of requested subclass
// @access  Public
levelRouter.route('/:level').get(async (req, res) => {
  try {
    const level = req.params.level
    const results = await Subclass.findOne(
      { index: req.params.index },
      {
        _id: 0,
        levels: 1,
      }
    ).lean()
    const singleLevel = results.levels.find((l) => l.level == level)
    res.json(singleLevel)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = subclassRouter
