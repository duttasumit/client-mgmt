const express = require('express')

// Include mongodb connection module.
require('./db/mongoose')

// Include 'Client' Router.
const clientRouter = require('./routers/client')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json()) // Conver the request data into json.
app.use(clientRouter)   // Using router defined as a module.

app.listen(port, () => {
    console.log(`App is running at port ${port}`)
})