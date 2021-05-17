const express = require('express')
const router = express.Router()

const Subclasses = require('../models/Subclasses')

// @route   GET api/spells
// @desc    Get list of all spells
// @access  Public
router.get('/', async (req, res) => {
  try {
    const count = await Subclasses.countDocuments()
    const results = await Subclasses.find()
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
