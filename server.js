// Requiring necessary npm packages
const express = require('express')
const session = require('express-session')
const path = require('path')
const bodyParser = require('body-parser')
const passport = require('passport')
// const mongoose = require('mongoose')
// Requiring passport as we've configured it
console.log('STAGE 0')

// const passport = require('./config/passport')
// DB Config
require('./config/db')
const app = express()
// Set public folder
app.use(express.static(path.join(__dirname, 'public')))

// MongoDb config
// const MONGODB_URI = process.env.MONGODB_URI
// mongoose.connect(MONGODB_URI)

console.log('STAGE 1')

// Body parser middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

console.log('STAGE 2')
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 3000
const db = require('./models')

// Create express app and configure middleware needed for authentication
console.log('STAGE 3')
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))

// Use sessions to keep track of the users login status
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())
console.log('STAGE 4')

// Requiring routes
require('./routes/html-routes.js')(app)
require('./routes/api-routes.js')(app)
console.log('STAGE 5')

// Syncing database and logging message
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log('App listening on PORT ', PORT)
  })
})
