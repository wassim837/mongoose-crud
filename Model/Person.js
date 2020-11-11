let mongoose = require('mongoose')
let PersonSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String],
})
module.exports = mongoose.model('Person', PersonSchema)