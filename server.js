const express = require('express')
const apiRoutes = require('./routes/api.js') // express json processing

// create web app server
const app = express()

app.use(express.json()) // express json processing

app.use('/api', apiRoutes) // express json processing

app.use(function(req, res, next) {
    res.status(404).send('Not found')
})

app.use(function(req, res, next, err) {
    console.error(err.stack) // for server developers
    res.status(500).send('Server error')
})

// start server running
const server = app.listen(process.env.PORT || 3000, function() {
    console.log('Express server running on port ', server.address().port)
})