const mongoose = require("mongoose")
const employeesSchema = new mongoose.Schema({
    name: String,
    title: String
})

const employees = mongoose.model("employees", employeesSchema)

module.exports = employees