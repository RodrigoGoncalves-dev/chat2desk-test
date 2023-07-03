const mongoose = require("../config/mongo/mongo");

let Schema = mongoose.Schema;

let user = new Schema({
    name: String,
    email: String,
    age: Number
})

let User = mongoose.model("User", user)

module.exports = User