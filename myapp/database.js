var mysql = require('mysql');
var conn = mysql.createConnection({
    host: "somildebate-mysqldb.mysql.database.azure.com",
    user: "sonika@somildebate-mysqldb",
    password: "Somildebatedb123",
    database: 'somildebmysql'
});
conn.connect(function (err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
});
module.exports = conn;
