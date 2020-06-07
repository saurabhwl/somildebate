var express = require('express');
var router = express.Router();
var db = require('../database');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('users');
});

router.post('/create', function (req, res, next) {

  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;

  var sql = `INSERT INTO contact (name, email, message ) VALUES ('${name}', '${email}', '${message}')`;
  db.query(sql, function (err, data) {
    if (err) throw err;
    console.log("record inserted");
  });
  res.redirect('/users');
});
module.exports = router;
