const express = require('express')
const router = express.Router()

const StartingEquipment = require('../models/StartingEquipment')

// @route   GET api/spells
// @desc    Get list of all spells
// @access  Public
router.get('/', async (req, res) => {
  try {
    const count = await StartingEquipment.countDocuments()
    const results = await StartingEquipment.find(
      {},
      { _id: 0, index: 1, 'class.name': 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
