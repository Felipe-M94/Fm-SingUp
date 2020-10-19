const mongoose = require('../database')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: true
  },
  email: {
    type: String,
    unique: true,
    lowercase: true,
    require: true
  },
  password: {
    type: String,
    select: false,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

userSchema.pre('save', async function(next) {
  const hash = await bcrypt.hash(this.password, 10)
  this.password = hash

  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User