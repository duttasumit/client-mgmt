const mongoose = require('mongoose')

// Create model with schema
const Client = mongoose.model('Clients', {
    domain: {
        type: String,
        required: true,
        unique: true
    },
    clientid: {
        type: String,
        required: true,
        unique: true
    },
    clientsecret: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = Client