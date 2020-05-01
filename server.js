const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const config = require('config')
const Bodyparser = require('body-parser')
// const meals = require('./routes/api/meals')
const users = require('./routes/api/users')
const auth = require('./routes/api/auth')
const cors = require('cors')

const app = express()

// Bodyparser middleware
app.use(Bodyparser.json())

// DB Config
const db = config.get('mongoURI')

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || db, {
  useNewUrlParser: true,
  useCreateIndex: true
})
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

app.use(cors())
// Routes
// app.use('/api/meals', meals)
app.use('/api/users', users)
app.use('/api/auth', auth)

const port = process.env.PORT || 3000

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

app.listen(port, () => console.log(`Server up and running on port ${port} !`))
