var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prono F1' });
});

router.get('/user', function(req, res, next) {
  res.render('user', { title: 'Prono F1' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Prono F1' });
});

module.exports = router;
