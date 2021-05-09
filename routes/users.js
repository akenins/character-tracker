const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

const User = require('../models/User')

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post(
  '/',
  [
    // Use express-validator to make sure certain rules are applied when a user is creating an account
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    // Destructure the below variable for readability (no req.body.name, req.body.email, etc.)
    const { name, email, password } = req.body

    try {
      let user = await User.findOne({ email })

      // If the email is not unique, return an error message
      if (user) {
        res.status(400).json({ msg: 'User already exists' })
      }

      // If the username is unique create a new account, this only creates the instance, doesn't write it to the database
      user = new User({ name, email, password })

      // Hash the password with bcrypt so a plain text password is not stored in the database
      const salt = await bcrypt.genSalt(10)

      user.password = await bcrypt.hash(password, salt)

      // Saves the user to the database
      await user.save()

      // Create the payload, the object you want to send in the JWT, we only need the user as we can access their account with just the user id
      const payload = {
        user: {
          id: user.id,
        },
      }

      // To generate a JWT you need to sign it, and the sign method takes four arguments, the payload, a secret which should be store in a config file, an object of options, and a callback
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 36000 },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }
)

module.exports = router
