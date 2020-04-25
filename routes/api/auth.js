const express = require('express')
const router = express.router
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

// User model
const User = require('../../models/User')

// Post route for Authentication
router.post('/', (req, res) => {
  const { name, email, password } = req.body

  // Validation
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' })
  }

  // Check for existing user
  User.findOne({ email })
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
                  name: user.name,
                  email: user.email
                }
              })
            })
        })
    }
    )
}
)

module.export = router
