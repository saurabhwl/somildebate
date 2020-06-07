var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "mysqldbserver.mysql.database.azure.com",
    user: "sonika@mysqldbserver",
    password: "Somildebatedb123",
    database: 'somildebatedb'
});
conn.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});
module.exports = conn;
