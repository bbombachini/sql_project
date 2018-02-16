var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Handlebars', message: 'Hello fucking world' });
});

module.exports = router;
