const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const config = require('config')
const Bodyparser = require('body-parser')
// const meals = require('./routes/api/meals')
const users = require('./routes/api/users')
const auth = require('./routes/api/auth')

const app = express()

// Bodyparser middleware
app.use(Bodyparser.json())

// DB Config
const db = config.get('mongoURI')

// Connect to MongoDB
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// Routes
// app.use('/api/meals', meals)
app.use('/api/users', users)
app.use('/api/auth', auth)

if (process.env.NODE_ENV === 'production') {
  // Sets a static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server up and running on port ${port} !`))
