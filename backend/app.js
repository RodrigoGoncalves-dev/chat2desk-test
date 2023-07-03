const express = require('express')
const bodyParser = require('body-parser')
const route = require('./routes')
const {consumeMessage, sendMessage} = require('./config/rabbitmq/index')

const app = express()
app.use(bodyParser.json())

app.use(consumeMessage)
app.use(sendMessage)

app.use('/user', route)

module.exports = app;