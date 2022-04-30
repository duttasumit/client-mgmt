const mongoose = require('mongoose')

const connectionURL = require('../../db_creds/mongoose_creds')

// Connect to mongodb.
mongoose.connect(connectionURL, {
    useNewURLParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})

// Next steps are create models using mongoose.model
// Add schemas in it.
// But under models/ folder