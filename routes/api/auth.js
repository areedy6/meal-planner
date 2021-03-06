const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

// User model
const User = require('../../models/User')

// Post route for Authentication
module.exports = router.post('/', (req, res) => {
  const { username, password } = req.body

  // Validation
  if (!username || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' })
  }

  // Check for existing user
  User.findOne({ username })
    .then(user => {
      if (!user) return res.status(400).json({ msg: 'User does not exists' })

      // Validate password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (!isMatch) return res.status(400).json({ msg: 'Invalid username/password' })

          jwt.sign(
            { id: user.id },
            config.get('jwtSecret'),
            { expiresIn: 86400 },
            (err, token) => {
              if (err) throw err
              res.json({
                token,
                user: {
                  id: user.id,
                  username: user.email
                }
              })
            })
        })
    }
    )
}
)
