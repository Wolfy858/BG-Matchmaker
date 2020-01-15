const mongoose = require('mongoose')
const User = require("../models/user")

mongoose.connect('mongodb://127.0.0.1:27017/bg-matchmaker-api', {
  useNewUrlParser: true,
  useCreateIndex: true
})
