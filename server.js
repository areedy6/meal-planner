const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const users = require('./routes/api/users')

const app = express()

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use(bodyParser.json())

// DB Config
// const db = require('./config/keys').mongoURI

const MONGO_DBURI = 'mongodb+srv://larsenr12:Password123@cluster0-rfzcr.mongodb.net/test?retryWrites=true&w=majority'

// Connect to MongoDB
mongoose.connect(MONGO_DBURI || 'mongodb://localhost/mealPlan', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Mongoose is connected')
})

// Passport middleware
app.use(passport.initialize())

// Passport config
require('./config/passport')(passport)

// Routes
app.use('/api/users', users)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server up and running on port ${port} !`))
