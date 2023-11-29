require('dotenv').config()

const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/note', require('./routes/note.route'))
app.use('/api/v1', require('./routes/api.route'))
const port = process.env.port || 3000
const server = app.listen(port, console.log(`App listining in port ${port} - http://localhost:${port}`))

module.exports = {app, server}