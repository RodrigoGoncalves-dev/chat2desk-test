const mongoose = require('mongoose')
require('dotenv').config()

const url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.vnqf8iw.mongodb.net/?retryWrites=true&w=majority`
const client = mongoose.connect(url)

client
.then(() => {
    console.log("Connected")
})
.catch(() => {
    console.log("Not Work")
})

module.exports = mongoose