const express = require('express')
const crypto = require('crypto')
const Client = require('../models/client-model')

// Use express router.
const router = new express.Router()

router.post('/client', async (req, res) => {
    const domain = req.header('Referer').split('/')[2]
    const clientSecret = crypto.randomBytes(12).toString('hex')
    const clientID = Math.random().toString(36).slice(2);
    const client = new Client({ domain, clientsecret: clientSecret, clientid: clientID })

    try {
        // Play wit model now.
        await client.save()
        res.status(201).send(client)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router