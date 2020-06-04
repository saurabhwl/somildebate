var express = require('express')
var app = express()
var os = require('os');
app.get('/', function (req, res) {
    res.send('Hello World from host ' + os.hostname() + '!')
})
app.post('/contact', function (req, res) {
    res.send(`${req.body.name} (${req.body.email}) says: ${req.body.message}`)
})
app.listen(3000, function () {
    console.log('Hello world app listening on port 3000!')
})

