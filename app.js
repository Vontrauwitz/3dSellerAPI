require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const dbConnect = require('./config/mongo')

app.use(cors())
app.use(express.json())

const port = process.env.PORT || 3002

app.use("/api", require("./routes"))

app.listen(port, () => {
  console.log(`Escuchando en http://localhost:${port}`);
})

dbConnect()

