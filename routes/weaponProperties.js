const express = require('express')
const weaponPropertiesRouter = express.Router()

const WeaponProperties = require('../models/WeaponProperties')

// @route   GET api/weapon-properties
// @desc    Get list of all weapon properties
// @access  Public
weaponPropertiesRouter.route('/').get(async (req, res) => {
  try {
    const count = await WeaponProperties.countDocuments()
    const results = await WeaponProperties.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/weapon-properties/:index
// @desc    Get details of requested weapon property
// @access  Public
weaponPropertiesRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await WeaponProperties.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = weaponPropertiesRouter
