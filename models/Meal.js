const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const mealSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = Meals = mongoose.model('meals', mealSchema)
