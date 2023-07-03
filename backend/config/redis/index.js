const redis = require('redis')
require('dotenv').config()
const client = redis.createClient("6379", "10.244.0.170")
client.auth_pass = "senha"

module.exports = client