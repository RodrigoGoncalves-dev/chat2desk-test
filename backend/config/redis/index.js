const redis = require('redis')
require('dotenv').config()
const client = redis.createClient({
    legacyMode: true,
    socket: {
        port: process.env.REDIS_PORT,
        host: process.env.REDIS_HOST
    }
})

module.exports = client