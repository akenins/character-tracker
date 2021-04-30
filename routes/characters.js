const express = require('express')
const router = express.Router()

// @route   GET api/character
// @desc    Get all user's characters
// @access  Private
router.get('/', (req, res) => {
  res.send('Get all characters')
})

// @route   POST api/character
// @desc    Add new character
// @access  Private
router.post('/', (req, res) => {
  res.send('Add a new character')
})

// @route   PUT api/character/:id
// @desc    Update characters
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Update characters')
})

// @route   DELETE api/character/:id
// @desc    Delete user's character
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Delete character')
})

module.exports = router
