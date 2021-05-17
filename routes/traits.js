const express = require('express')
const router = express.Router()

const Traits = require('../models/Traits')

// @route   GET api/spells
// @desc    Get list of all spells
// @access  Public
router.get('/', async (req, res) => {
  try {
    const count = await Traits.countDocuments()
    const results = await Traits.find(
      {},
      { _id: 0, index: 1, name: 1, url: 1 }
    ).sort({ index: 1 })
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
