const express = require('express')
const router = express.Router()

const Subraces = require('../models/Subraces')

// @route   GET api/subraces
// @desc    Get list of all subraces
// @access  Public
router.get('/', async (req, res) => {
  try {
    const count = await Subraces.countDocuments()
    const results = await Subraces.find()
    res.json({ count, results })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

module.exports = router
