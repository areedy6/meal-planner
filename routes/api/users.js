const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

// User model
const User = require('../../models/User')

// Post route for new users
module.exports = router.post('/', (req, res) => {
  const { username, password } = req.body
  console.log('/api/users')

  // Validate
  if (!username || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' })
  }

  // Check for a existing user
  User.findOne({ username })
    .then(user => {
      if (user) return res.status(400).json({ msg: 'User already exists' })

      const newUser = new User({
        username,
        password
      })

      // Create the hash
      bcrypt.genSalt(10, (err, salt) => {
        if (err) {
          throw err
        }

        bcrypt.hash(newUser.password, salt, (hashErr, hash) => {
          if (hashErr) throw hashErr
          newUser.password = hash
          newUser.save()
            .then(user => {
              jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 86400 },
                (tokenErr, token) => {
                  if (tokenErr) throw tokenErr
                  res.json({
                    token,
                    user: {
                      id: user.id,
                      username: user.email
                    }
                  })
                })
            })
        })
      })
    })
})
