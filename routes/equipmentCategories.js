const express = require('express')
const equipmentCategoriesRouter = express.Router()

const EquipmentCategories = require('../models/EquipmentCategories')

// @route   GET api/equipment-categories
// @desc    Get list of all equipment categories
// @access  Public
equipmentCategoriesRouter.route('/').get(async (req, res) => {
  try {
    const count = await EquipmentCategories.countDocuments()
    const results = await EquipmentCategories.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

// @route   GET api/equipment-categories/:index
// @desc    Get details of requested equipment category
// @access  Public
equipmentCategoriesRouter.route('/:index').get(async (req, res) => {
  try {
    const results = await EquipmentCategories.findOne(
      { index: req.params.index },
      { _id: 0 }
    ).sort({ index: 1 })
    res.json(results)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = equipmentCategoriesRouter
