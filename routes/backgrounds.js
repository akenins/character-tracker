const express = require('express')
const router = express.Router()

const Backgrounds = require('../models/Backgrounds')

// @route   GET api/spells
// @desc    Get list of all spells
// @access  Public
router.get('/', async (req, res) => {
  try {
    const count = await Backgrounds.countDocuments()
    const results = await Backgrounds.find()
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
