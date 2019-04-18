const mongoose = require('mongoose')

const server = "mongodb+srv://dbuser:db123@cluster0-nburh.mongodb.net/test?retryWrites=true"
const user = "dbuser"
const password = "db123"

mongoose.connect('mongodb+srv://dbuser:db123@cluster0-nburh.mongodb.net/test?retryWrites=true')

const CostumerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('Costumer', CostumerSchema)
