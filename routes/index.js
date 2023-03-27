var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Prono F1' });
});

router.get('/user', function(req, res, next) {
  res.render('user', { title: 'Prono F1' });
});

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Prono F1' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Prono F1' });
});

router.get('/ranking', function(req, res, next) {
  res.render('ranking', { title: 'Prono F1' });
});

router.get('/bets', function(req, res, next) {
  res.render('bets', { title: 'Prono F1' });
});

module.exports = router;
