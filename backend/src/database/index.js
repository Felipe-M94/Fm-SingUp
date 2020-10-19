const mongoose = require('mongoose')

require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@fm-projects.ypt7e.mongodb.net/users?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

mongoose.Promise = global.Promise

module.exports = mongoose