const mongoose = require("mongoose")
const drinkssSchema = new mongoose.Schema({
    name: String,
    content: String
})

const drinks = mongoose.model("drinks", drinksSchema)

module.exports = drinks