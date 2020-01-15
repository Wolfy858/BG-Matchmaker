const express = require("express")
const userRouter = require("./routers/user")
require("./db/mongoose")

const app = express()

app.use(express.json())

app.use(userRouter)

app.get('', (req, res) => {
  res.send('Hello, world!')
})

module.exports = app
