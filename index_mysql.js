var express = require('express')
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "mysqldbserver.mysql.database.azure.com",
    user: "sonika@mysqldbserver",
    password: "Somildebatedb123"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

var app = express()
var os = require('os');
app.get('/', function (req, res) {
    res.send('Hello World from host ' + os.hostname() + '!')
})
app.post('/contact', function (req, res) {
    name = req.body.name
    email = req.body.email
    message = req.body.message
    res.send(`${name} (${email}) says: ${message}`)
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `INSERT INTO contact (name, email, message) VALUES (${name}, ${email}, ${message})`;
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
        });
    })
})
app.listen(2000, function () {
    console.log('Hello world app listening on port 2000!')
})



